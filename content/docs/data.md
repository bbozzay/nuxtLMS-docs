---
title: "Data files"
description: "Data files are used to validate the correct data on the front and backend"
---
Data files act as tiny databases that are mainly used for validation between the client and lambda functions.

## User-role products
Create JSON containing the Stripe payment intents amount to charge with associated auth0 role_ids.
```json
// data/plans.json
{
  "plans": [
    {
      "name": "Plan Name",
      "description": "Plan Description",
      "home": "/learn",
      "role_id": "auth0_roleid",
      "amount": 100,
      "amount_usd": 100
    }
  ]
}
```

This file can be imported in the front-end signup page to display the supported paid plans:
```vue
// pages/signup.vue
<template>
  <div class="login container w-6/12 mx-auto flex flex-col items-center justify-center text-center mt-0 py-32">
    <div>
      <h1>Select a Plan</h1>
    </div>
    <signup-plans :plans="plans"></signup-plans>
  </div>
</template>

<script>
import data from "~/data/plans";
export default {
  ssr: false,
  middleware: ["boss/requireLogin"],
  // Data pre-rendered by nuxt generate
  async asyncData() {
    return {
      plans: data.plans
    }
  },
}
</script>
```


On the backend, the JSON file is imported into the lambda function to confirm that the request contains the actual data.
```js
const data = require("../../data/plans.json");

exports.handler = async function(event, context) {
    const meta = JSON.parse(event.body);
    const plan = data.plans[meta.index];
    ...
```
Data validation occurs by looking up the plan from the data file instead of accepting the plan data directly from the client-side.

