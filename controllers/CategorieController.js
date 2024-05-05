const { Categorie, Product } = require("../models/index");

const CategorieController = {
    async create(req, res) {
        try {
            const categorie = await Categorie.create(req.body);
            res.status(201).send({msg: "Categorie created successfully", categorie});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Categorie.update(req.body, {
                where: {
                    id: req.params.id,
                }
            });
            res.status(202).send({msg: "Categorie updated successfully"})
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Categorie.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send("Categorie deleted.");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getAll(req, res) {
        try {
            const categorie = await Categorie.findAll({
                include:[{model: Product,attributes:["name"], through: {attributes: []}}]
            });
            res.send(categorie);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = CategorieController;