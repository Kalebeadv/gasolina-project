'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicle.belongsTo(models.User_Vehicle);
    }
  }
  Vehicle.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    consumo: DataTypes.FLOAT,
    typefuel: DataTypes.STRING,
    year: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};