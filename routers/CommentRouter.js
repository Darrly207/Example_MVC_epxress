const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/", CommentController.createComment);
router.put("/:id", CommentController.updateComment);
router.delete("/:id", CommentController.deleteComment);
router.get("/", CommentController.getAllComments);
module.exports = router;
