---
title: "API Helpers"
description: "Plugin helpers to use with serverless functions"
---
API helpers trigger lambda functions. Validation is performed server-side. For static sites, validation is performed in lambda functions.

```fetchMeta```
User must be logged in.
Updates the store with app_metadata and user_metadata. This is used after login.

```fetchUserMeta```
User must be logged in.
Updates the store with user_metadata.

```setUserMeta```
User must be logged in.
Updates the API user_metadata and then updates the store.

```fetchAppMeta```
User must be logged in.
Updates the store with app_metadata.

```fetchUserRoles```
User must be logged in.
Fetch roles assigned to the current user from the api source.

```fetchVideoId```
User must be logged in.
Returns a decrypted video ID.

```addUserToRole```
User must be logged in.
Assigns a role to a user.

```setSignupMeta```
Sets user_metadata one time (after initial signup). Useful for adding info like the referringUrl or an affiliate ID.
