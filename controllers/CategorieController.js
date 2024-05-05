const { Categorie } = require("../models/index");

const CategorieController = {
    async create(req, res) {
        try {
            const categorie = await Categorie.create(req.body);
            res.status(201).send({msg: "Categorie created succesfully", categorie});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = CategorieController;