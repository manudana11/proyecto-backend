'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    
    static associate(models) {
      Categorie.belongsToMany(models.Product, {
        through:models.ProductCategorie
      })
    }
  }
  Categorie.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};