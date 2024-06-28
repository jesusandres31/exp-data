/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "im30ji89bovg4bv",
    "created": "2024-06-28 19:43:03.162Z",
    "updated": "2024-06-28 19:43:03.162Z",
    "name": "transaction_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "esq0tkbs",
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
  const collection = dao.findCollectionByNameOrId("im30ji89bovg4bv");

  return dao.deleteCollection(collection);
})
