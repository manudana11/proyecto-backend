const { Order, Product, User } = require("../models/index");

const OrderController = {
    async create(req, res) {
        try {
            const order = await Order.create(req.body);
            order.addCategorie(req.body.UserId);
            res.status(201).send({msg: "Order created succesfully", order});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = OrderController;