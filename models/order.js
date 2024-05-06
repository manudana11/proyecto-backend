'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Product, {
        through:models.OrderUser
      });
    }
  }
  Order.init({
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};