const router = require("express").Router();

//import to-do model
const todoItemsModel = require("../models/todoItems");

// created post item router  -- It will add Todo item in our database
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });

    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json("item added successfully");
  } catch (err) {
    res.json(err);
  }
});

//create second route -- get all items
router.get("/api/item", async (req, res) => {
  try {
    const allItems = await todoItemsModel.find({});
    res.status(200).json(allItems);
  } catch (err) {
    console.log(err);
  }
});

//create third route -- update items
router.put("/api/item/:id", async (req, res) => {
  try {
    const updateItems = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item updated");
  } catch (err) {
    console.log(err);
  }
});

//create fourth route -- Delete items
router.delete("/api/item/:id", async (req, res) => {
  try {
    const deleteItems = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    console.log(err);
  }
});

//export router
module.exports = router;
