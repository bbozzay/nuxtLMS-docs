---
title: "Config auth0"
description: ""
---

Create a regular application


## Set Application Urls
Go to application > settings

Application login url:
`yourwebsite.com/login`

Allowed callback urls:
```
http://localhost:8888, http://localhost:8888/login, https://yourlivedomain.com, https://yourlivedomain.com/login
```

Allowed logout urls:
```
http://localhost:8888, http://localhost:8888/logout, https://yourlivedomain.com, https://yourlivedomain.com/logout
```

Allowed web origins:
```
http://localhost:8888, https://yourdomain.com
```

Allowed origins (cors):
If you use CDNs or other urls on the site different from your web origins.

## APIs

Applications > APIs
* copy the `auth0 management api` audience.

Note sure if needed:
* create an API endpoint for **client-side actions** with limited permissions. IE `https://techlockdown/v1/authorize/`. It's recommended to include a trailing slash in the url and to also include https://.

### Management API
Add management API permissions for the client

Applications > APIs > Management API

* Machine to Machine > add the application you created


### Permissions
The management API should grant the following permissions to the application you created:
```
read:roles
read:user_idp_tokens 
create:users_app_metadata update:users_app_metadata delete:users_app_metadata 
update:users 
read:users
```