const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getALLTask);
routes.post("/create", TaskController.createTask);

module.exports = routes;
