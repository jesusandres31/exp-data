/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mhfxf3xy5dyap2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbgjewaa",
    "name": "currency",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k0b0eb86k6ro321",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mhfxf3xy5dyap2")

  // remove
  collection.schema.removeField("nbgjewaa")

  return dao.saveCollection(collection)
})
