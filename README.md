# nuxtLMS
A framework for building gated content websites. Supports Serverless/JAMStack.

The module provides components and a helper plugin. Lambda function templates are provided, but can be overridden with your own.

Features:
* Role-based gated content
  * Paid user roles
  * Role-based routes or gated embedded videos
* Redirect after login logic extended to support more useful cases
  * Redirect to a referring route or dynamic route
  * Redirect logic for dedicated login pages
* Course content
  * Generate courses using re-used content 
  * Course sidebar auto-generates anchor links
  * Previous/next links
  * Mix free content with premium content for better upselling