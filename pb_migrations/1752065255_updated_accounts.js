/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2324088501")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": "@request.auth.id != \"\" && @collection.accounts.user.id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && @request.body.user.id = @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && user.id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2324088501")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
