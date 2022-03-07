'use strict';
const {
  Model
} = require('sequelize');
const vehicle = require('./vehicle');
module.exports = (sequelize, DataTypes) => {
  class User_Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Vehicle.belongsTo(models.User);
      User_Vehicle.hasMany(models.Vehicle)
    }
  }
  User_Vehicle.init({
    idUser: DataTypes.BIGINT,
    idVehicle: DataTypes.BIGINT,
    placa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Vehicle',
  });
  return User_Vehicle;
};