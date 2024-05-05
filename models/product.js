'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through:models.OrderUser
      });
      Product.belongsToMany(models.Categorie, {
        through:models.ProductCategorie
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    reference: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};