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


`options.paths.login`

Redirect relative path for login.


`options.paths.signup`

Redirect relative path for signup.

## .env
Required .env key/values.

`BASEURL`

localhost:8888


`PURGE_CSS`

default: true

Used for development to avoid purging css to save on build time.


`AUTH0_CLIENT_ID`

Applications > Your Application > Settings > Client ID


`AUTH0_DOMAIN`

Applications > Your Application > Domain


`AUTH0_AUDIENCE`

Applications > APIs > Your API used for client-side login. 


`AUTH0_SECRET`

Applications > Your Application > Settings > Client Secret


`STRIPE_PUB_KEY`

Stripe Dashboard > Developers > API keys > Publishable key.


`STRIPE_SECRET_KEY`

Stripe Dashboard > Developers > API keys > Secret key.


`STRIPE_WEBHOOK_SECRET`

Stripe Dashboard > Developers > Webhooks > Your Endpoint > Signing secret


## Elastic Mail
`options.elasticMail.publicAccountID`
Required
