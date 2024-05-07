const { Order, Product, User, Token, Sequelize } = require("../models/index");

const OrderController = {
    async create(req, res) {
        try {
            const productIds = await req.body.ProductId;
            const products = await Product.findAll({
                where: {
                    id: productIds
                }
            });
            let totalAmount = 0;
            products.forEach(product => {
                totalAmount += product.price;
            });
            req.body.amount = totalAmount;
            const order = await Order.create({...req.body, status: "Preparation", amount: totalAmount, UserId: req.user.id});
            req.body.status = "Preparation";
            await order.addProduct(req.body.ProductId);
            res.status(201).send({msg: "Order created succesfully", order, totalAmount, products});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getAll(req, res) {
        try {
            const orders = await Order.findAll({
                include:[{model: Product,attributes:["name", "price"], through: {attributes: []}}]
            });
            res.send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = OrderController;