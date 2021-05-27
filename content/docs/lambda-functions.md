---
title: Lambda Functions
description: Serverless functions used.
---

# Auth0
## user_roles
Returns the user_roles assigned to that user

## user_metadata
Returns only the user_metadata.

## metadata
Returns the user_metadata and app_metadata

## update_user_metadata
Update only the user_metadata.

## update_app_metadata
Update only the app_metadata.

## stripe_create_customer
Create a customer in stripe and associate the id with app_metadata.

## purchase
Looks up the selected plan in the data file, creates a payment intent based on the data entry, and returns a client_secret and the associated plan index.

