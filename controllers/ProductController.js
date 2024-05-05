const { Product, Categorie } = require("../models/index");
const { getAll } = require("./UserController");

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            product.addCategorie(req.body.CategorieId);
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
            const product = await Product.findByPk(req.params.id);
            product.setCategories(req.body.CategorieId);
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
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include:[{model: Categorie,attributes:["name"], through: {attributes: []}}]
            })
            res.send(products)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id, {
                include: [Product]
            })
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ProductController;