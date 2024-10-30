const UserRouter = require("./UserRouter");
const CommentRouter = require("./CommentRouter");
const routes = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/comment", CommentRouter);
};

module.exports = routes;
