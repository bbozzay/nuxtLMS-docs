const { getParentLink } = require("~/utilities/relational_links.js");
const getCurrentPost = async (data) => {
  return new Promise(async(resolve, reject) => {
    // get the index page for the current single post
    const indexPage = getParentLink(data.route.path, data.route.params.slug);
    // fetch our article here
    let article = await data.$content(indexPage, data.params.slug).fetch()
    // modify the article.body using the walker to filter each node
    // Use the walker callback to move the image object to a childnode
    // then replace the properties on the previous object with the <a href> node
    let meta = []
    article.description ? meta.push({ hid: "description", name: "description", content: article.description }) : false;
    return resolve({ 
      article,
      title: article.title,
      meta: meta 
    })
  })
}

const getCurrentPostIndex = async (data, options) => {
  return new Promise(async(resolve, reject) => {

    const only = options && options.hasOwnProperty("only") ? options.only : ["title", "description", "path", "slug"];
    const sortBy = options && options.hasOwnProperty("sortBy") ? options.sortBy : ["createdAt", "asc"];
    const without = options && options.hasOwnProperty("without") ? options.without : [];
    const where = options && options.hasOwnProperty("where") ? options.where : {};
    const limit = options && options.hasOwnProperty("limit") ? options.limit : "";
    const skip = options && options.hasOwnProperty("skip") ? options.skip : "";
    const search = options && options.hasOwnProperty("search") ? options.search : "";
    const targetContent = options && options.hasOwnProperty("targetContent") ? options.targetContent : data.route.path;
    const deep = options && options.hasOwnProperty("deep") ? options.deep : true;
      // get the index page name
      // fetch a list of articles based on this name
    const articles = await data.$content(targetContent, { deep: deep })
      .only(only)
      .without(without)
      .where(where)
      .search(search)
      .sortBy(sortBy)
      .limit(limit)
      .skip(skip)
      .fetch()

    return resolve({
      articles,
    })
  })
}

module.exports = {
  getCurrentPost,
  getCurrentPostIndex
}