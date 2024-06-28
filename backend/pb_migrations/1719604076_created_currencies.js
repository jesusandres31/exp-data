/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k0b0eb86k6ro321",
    "created": "2024-06-28 19:47:56.496Z",
    "updated": "2024-06-28 19:47:56.496Z",
    "name": "currencies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vabbtjng",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k0b0eb86k6ro321");

  return dao.deleteCollection(collection);
})
