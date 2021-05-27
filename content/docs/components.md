---
title: "Components"
description: "Components used for the LMS"
---
## access-video-player
props: video_id

Loads an embedded video if the user has the required role. Otherwise, the user is prompted to signup.

## signup-plans
List of signup plans and a stripe payment form.

props: `plans<Array>`, `redirectPath<String>`

## signup-plan
List one signup plan.

props: `name<String>`, `description<String>`

## navigation-auth

```
<navigation-auth></navigation-auth>
```

Header navigation item that displays either login or logout depending on the user's signed in state.

## luminous-box
Adds lightbox functionality to the specific page. Any image within article_content can be opened on click.

## guide-sidebar
Generates a pre-rendered sidebar based on the specified table of contents. Automatically adds anchor links based on the article content.

props: `tableOfContents<Object>`

## gated-login
Embeds a login button that links to the `/login` page and specifies an alternative redirectPath instead of the referring page. Useful if you want to redirect to a non-referring page after login.

props: `redirectPath<String>`, `buttonText<String>: Start the Free Course`