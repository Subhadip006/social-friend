/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation2375276105",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "user",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4135340389",
        "max": 0,
        "min": 0,
        "name": "caption",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file3760176746",
        "maxSelect": 99,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "images",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "select2623376988",
        "maxSelect": 1,
        "name": "facebook_status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pending",
          "successfull",
          "failed"
        ]
      },
      {
        "hidden": false,
        "id": "select247874853",
        "maxSelect": 1,
        "name": "linkedIn_status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pending",
          "successfull",
          "failed"
        ]
      },
      {
        "hidden": false,
        "id": "select1820499459",
        "maxSelect": 1,
        "name": "instagram_status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "pending",
          "successfull",
          "failed"
        ]
      },
      {
        "hidden": false,
        "id": "select394364643",
        "maxSelect": 3,
        "name": "platforms",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "facebook",
          "instagram",
          "linkedIn"
        ]
      },
      {
        "hidden": false,
        "id": "date4222287402",
        "max": "",
        "min": "",
        "name": "posted_at",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_2106002237",
    "indexes": [],
    "listRule": null,
    "name": "post",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2106002237");

  return app.delete(collection);
})
