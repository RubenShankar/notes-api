console.log("THIS IS ROUTEs and have methods like get post and all other");

const express = require("express");

const router =  express.Router(); // this is very important

const auth = require("../middleware/authMiddleware");   // for connecting middleware

const noteController = require("../controller/noteController");  // for connecting controller

// protected route JWT REQUIRED

router.get("/fetchAll",auth, noteController.getAllNotes);  // this is get method  == to fetch

router.post("/add", auth,noteController.createNote);  // this is post method  == to save  or to add new data

router.delete("/delete/:id",auth, noteController.deleteNote);   // this is delete method == to delete particular note by id

router.put("/update/:id", auth,noteController.updateNote);       // this put method will update particular note  by id

router.get("/fetchById/:id",auth,noteController.getNoteById);   // this method or router helps user to fetch particular file by id

module.exports = router;
