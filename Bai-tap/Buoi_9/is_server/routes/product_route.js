const route = require('express').Router();
const controller = require('../controller/product_controller');

route.get("/getProduct", controller.getProduct);
route.put("/updateProduct", controller.updateProduct);
route.delete("/deleteProduct", controller.deleteProduct);

module.exports = route;
