const { Product } = require("../models/index");

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({msg: "Product created succesfully", product});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Product.update(req.body, {
                where: {
                    id: req.params.id,
                }
            });
            res.status(201).send({msg: "Product updated successfully"});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.send("Product deleted successfully");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = ProductController;