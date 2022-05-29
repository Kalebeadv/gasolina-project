'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gasstation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gasstation.hasMany(models.Fuel)
    }
  }
  Gasstation.init({
    cnpj: DataTypes.INTEGER,
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gasstation',
  });
  return Gasstation;
};