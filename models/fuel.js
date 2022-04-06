'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fuel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fuel.belongsTo(models.Gasstation)
    }
  }
  Fuel.init({
    type: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Fuel',
  });
  return Fuel;
};