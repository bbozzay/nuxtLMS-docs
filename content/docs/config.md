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

Required Middleware

```js
router: {
  middleware: ['boss'],
},
```
Enables:
* requireLogin
* requireRole

Commits a login or signup referral url to the store. User is redirected to the referral url after login.

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

## Optional Pages

`extra/pages`

Starter templates for required pages.


## Nuxt Auth Config
Recommended config for nuxt/auth using the auth0 strategy.
```
auth: {
  resetOnError: true,
  redirect: {
    login: '/login',
    logout: false,
    callback: '/login',
    home: false
  },
  strategies: {
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUTH0_AUDIENCE,
      scope: ['openid', 'profile', 'email'],
      redirectUri: process.env.BASEURL + "/login",
      logoutRedirectUri: process.env.BASEURL + "/logout",
    }
  }
}
```