/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      typography: {
        'h1': {
          fontWeight: 600
        }
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { 
          fontSize: config('theme.fontSize.6xl'),
          lineHeight: "1",
          marginBottom: "2.25rem"
        },
        'h2': { fontSize: config('theme.fontSize.4xl') },
        'h3': { 
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          margin: `0 0 ${config('theme.margin.2')} 0`
        }
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
}
