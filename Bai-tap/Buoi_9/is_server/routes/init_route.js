const userRoute = require('./user_route')
const productRoute = require('./product_route')


const initRouters = (app) => {
    app.use("/user", userRoute)
    app.use("/product", productRoute)
}

module.exports = initRouters;