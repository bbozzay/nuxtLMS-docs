---
title: "Middleware"
description: "Middleware"
---

## requireLogin
Redirects to the login page if user isn't logged in. If the `<gated-login>`component is used on the login page, the user will be redirected back after login.

## requireRole
Redirects to the signup page if the user doesn't have the required user role.

The middleware uses the default value, which is set in options, or uses the meta.requireRole set on the page template level.

```js
export default {
  middleware: ["boss/requireLogin", "boss/requireRole"],
  meta: {
    requireRole: ["pagespeed"]
  },
```