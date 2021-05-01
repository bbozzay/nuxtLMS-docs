---
title: "elastic email integration"
description: Helper methods for streamlining elastic mail integration
---
If options.elasticMail.publicAccountID is set, these helper methods can be used.

## contactAdd

`contact/add`

https://api.elasticemail.com/public/help#Contact_Add

```js
$boss.elasticMail().contactAdd(params)
```

required: params.email

```js
export default {
  async mounted() {
    let status = await this.$boss.elasticMail().contactAdd({ 
      email: "someEmail@gmail.com", 
      publicListID: "847c6bdd-754d-47dd-905d-b2cba34f2129",
      activationTemplate: "Activation Email Devboss"
    })
    console.log(status.success) // true
  }
}
</script>
```
