'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      consumo: {
        type: Sequelize.FLOAT
      },
      typeFuel: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      typeVehicle:{
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};