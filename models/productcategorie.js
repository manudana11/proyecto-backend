'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductCategorie.init({
    ProductId: DataTypes.INTEGER,
    CategorieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductCategorie',
  });
  return ProductCategorie;
};