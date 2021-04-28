---
title: "Options"
description: "Options to init the module with"
---
`options.namespace`

Type: String

Default: boss

Specify your own namespace instead of `$boss`.

`options.requireRole`

Type: Object

Specify default settings for requireRole middleware.

`options.requireRole.default`

Type: String

Default: "premium"

The role to use if none is directly specified.

`options.apiBaseUrl`

Default: process.env.BASEURL + "/.netlify/functions/"

The absolute base url to use for lambda function API calls.

`paths.login`
Redirect relative path for login.

`signup.signup`
Redirect relative path for signup.