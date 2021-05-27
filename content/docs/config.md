---
title: "Config"
---

nuxt.config.js

Required Modules

```js
modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    // "~/modules/content",
    ["@nuxtjs/auth-next", {
      plugins: ["~/plugins/auth.js"]
    }],
    ['nuxt-stripe-module', {
      publishableKey: process.env.STRIPE_PUB_KEY
    }],
    ['~/modules/boss', {
      requireRole: {
        default: "pagespeed"
      },
      apiBaseUrl: process.env.BASEURL + "/.netlify/functions/",
      elasticMail: {
        publicAccountID: "96535706-ed6d-4aa6-8e70-ad35077ed791",
      }
    }]
  ],
```

## Optional Plugins
Pre-populate the store if logged in.

1. Copy `extras/plugins/auth.js`
2. Paste into root/plugins
3. Add to auth-next dependency module
```
modules: [
  ["@nuxtjs/auth-next", {
    plugins: ["~/plugins/auth.js"]
  }],
]
```
