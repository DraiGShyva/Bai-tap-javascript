const route = require('express').Router();
const controller = require('../controller/user_controller');

route.get("/getUser", controller.getUser);
route.put("/updateUser", controller.updateUser);
route.delete("/deleteUser", controller.deleteUser);

module.exports = route;
