// Course management and base functionality
// 1. Last read item
// 2. Next recommended article
import { getParentLink } from "~/utilities/relational_links.js";
export const state = () => ({
  lookup: [
    {
      slug: "docs",
      title: "Docs",
      modules: [
        {
          title: "Overview",
          articleSlugs: [
            "options",
            "methods",
            "middleware",
            "data",
            "components",
            "internals",
            "auth0",
          ]
        }
      ]
    }
  ],
  courseIndex: {
    "docs": 0
  }
})

// export const mutations = {
//   increment(state) {
//     state.counter++
//   }
// }

export const getters = {
  // Use with asyncData (not within a component)
  // Filters state.all to return the course object
  currentCourse: (state) => (targetCourseSlug) => {
    const matchedCourse = state.lookup.filter(course => course.slug == targetCourseSlug)
    return matchedCourse.length > 0 ? matchedCourse[0] : false;
  },
  fetchCourseArticles: (state) => async(data, articlePath) => {
    const fetchedCourses = await data.$content(articlePath, { deep: true })
    .only(["title", "description", "path", "slug", "body", "access_level"])
    .fetch();
    return fetchedCourses;
  },
  // Returns the article object containing multiple properties
  fetchCourseArticle: (state, getters) => (articleSlug, fetchedArticles) => {
    return fetchedArticles.filter(article => article.slug == articleSlug)[0];
  },
  // Pass a heading object from the body and return the heading text, slug
  articleHeadingObject: () => (headingObject) => {
    if (!headingObject.hasOwnProperty("children") || !headingObject.hasOwnProperty("props")) {
      return false
    }
    if (!headingObject.props.hasOwnProperty("id")) {
      return false
    }
    let titleElement = headingObject.children.filter(element => element.type == "text")
    if (!titleElement || titleElement.length == 0) {
      return
    }
    return {
      title: titleElement[0].value,
      slug: headingObject.props.id,
      tag: headingObject.tag
    }
  },
  articleBodyAnchors: (state, getters) => (articleBody, articlePath) => {
    const articleBodyAnchors = [];
    if (!articleBody.hasOwnProperty("children")) {
      return articleBodyAnchors;
    }
    for (let i = 0; i < articleBody.children.length; i++) {
      let firstLevelElement = articleBody.children[i];
      if (firstLevelElement.tag == "h2") {
        let headingObject = getters.articleHeadingObject(firstLevelElement);
        if (headingObject) {
          headingObject.path = articlePath + `#${headingObject.slug}`;
          articleBodyAnchors.push(headingObject);
        } 
      }
    }
    return articleBodyAnchors;
  },
  // Generate a table of contents with the course slug
  tableOfContents: (state, getters) => async(data, targetCoursePath) => {
    const coursePath = targetCoursePath ? targetCoursePath : getParentLink(data.route.path, data.route.params.slug);
    const courseSlug = coursePath.split("/").pop();
    const fetchedArticles = await getters.fetchCourseArticles(data, coursePath);
    const matchedCourse = getters.currentCourse(courseSlug);

    // Create a new object based on the existing datastructure for the lookup property
    const generatedTableOfContents = {
      title: matchedCourse.title,
      slug: matchedCourse.slug,
      modules: []
    }

    // For each module in the fetched course
    for (let i = 0; i < matchedCourse.modules.length; i++) {
      let fetchedModule = matchedCourse.modules[i];
      generatedTableOfContents.modules.push({
        title: fetchedModule.title,
        articles: []
      })
      // Reference to the newly pushed module
      let newModule = generatedTableOfContents.modules[generatedTableOfContents.modules.length-1];
      for (let l = 0; l < fetchedModule.articleSlugs.length; l++) {
        let articleEntry = fetchedModule.articleSlugs[l];
        let articleSlug = typeof articleEntry === "object" ? articleEntry.slug : articleEntry;
        let fetchedArticle = getters.fetchCourseArticle(articleSlug, fetchedArticles);
        
        // Replace the article slug in the new object with a 
        newModule.articles[l] = {
          title: fetchedArticle.title,
          path: fetchedArticle.path,
          slug: fetchedArticle.slug,
          anchors: getters.articleBodyAnchors(fetchedArticle.body, fetchedArticle.path)
        };
      }
    }
    return generatedTableOfContents;
  },
  lookupModuleArticleIndex: (state, getters) => (courseIndex, articleSlug) => {
    let moduleIndex = 0;
    let articleIndex = 0;
    for (let i = 0; i < state.lookup[courseIndex].modules.length; i++) {
      let module = state.lookup[courseIndex].modules[i];
      for (let l = 0; l < module.articleSlugs.length; l++) {
        let articleEntry = module.articleSlugs[l];
        let lookupArticleSlug = typeof articleEntry === "object" ? articleEntry.slug : articleEntry
        if (lookupArticleSlug == articleSlug) {
          // Set TOC index to lookup matched indexes
          moduleIndex = i;
          articleIndex = l;
          // Break out of loop since a match is found
          l = module.articleSlugs.length;
          i = state.lookup[courseIndex].modules.length;
        }
      }
    }
    return {
      moduleIndex: moduleIndex,
      articleIndex: articleIndex
    }
  },
  nextArticle: (state, getters) => (articles, articleIndex) => {
    if (articleIndex >= articles.length-1) {
      return {
        title: null,
        path: null
      }
    }
    return {
      title: articles[articleIndex+1].title,
      path: articles[articleIndex+1].path
    }
  },
  previousArticle: (state, getters) => (articles, articleIndex) => {
    if (articleIndex <= 0) {
      return {
        title: null,
        path: null
      }
    }
    return {
      title: articles[articleIndex-1].title,
      path: articles[articleIndex-1].path
    }
  },
  nextPreviousLinks: (state, getters) => (data, tableOfContents, articleSlug, targetCoursePath) => {
    const coursePath = targetCoursePath ? targetCoursePath : getParentLink(data.route.path, data.route.params.slug);
    const courseSlug = coursePath.split("/").pop();
    const courseIndex = state.courseIndex[courseSlug];
    let indexes = getters.lookupModuleArticleIndex(courseIndex, articleSlug);
    let previousArticle = getters.previousArticle(tableOfContents.modules[indexes.moduleIndex].articles, indexes.articleIndex);
    let nextArticle = getters.nextArticle(tableOfContents.modules[indexes.moduleIndex].articles, indexes.articleIndex);
    return {
      previous: previousArticle,
      next: nextArticle
    }
  }
}