const { Product, Categorie, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            await product.addCategorie(req.body.CategorieId);
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
                include:[{model: Categorie,attributes:["name"], through: {attributes: []}}]
            });
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByName(req, res) {
        try {
            const product = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}`,
                    }
                }
            });
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByPrice(req, res) {
        try {
            const product = await Product.findAll({
                where: {
                    price: {
                        [Op.like]: `%${req.params.price}`,
                    }
                }
            });
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByPriceDesc(req, res) {
        try {
            const product = await Product.findAll({
                include: [{ model: Categorie, attributes:["name"], through: { attributes: []}
                }],
                order: [['price', 'DESC']]
            });
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ProductController;