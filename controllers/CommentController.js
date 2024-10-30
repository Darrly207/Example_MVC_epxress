const CommentServices = require("../services/commentServices");

const createComment = async (req, res) => {
  try {
    const { userId, content } = req.body;

    if (!userId || !content) {
      return res.status(400).json({
        status: "ERR",
        message: "userId and content are required",
      });
    }

    const response = await CommentServices.createComment({ userId, content });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { commentId, content } = req.body;

    if (!commentId || !content) {
      return res.status(400).json({
        status: "ERR",
        message: "commentId and content are required",
      });
    }

    const response = await CommentServices.updateComment({
      commentId,
      content,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    if (!commentId) {
      console.log(commentId);
      return res.status(400).json({
        status: "ERR",
        message: "commentId is required",
      });
    }

    const response = await CommentServices.deleteComment(commentId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};

const getAllComments = async (req, res) => {
  try {
    const response = await CommentServices.getAllComments();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      status: "ERR",
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  getAllComments,
};
