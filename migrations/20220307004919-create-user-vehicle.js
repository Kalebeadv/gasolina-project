'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'

      },
      idVehicle: {
        type: Sequelize.INTEGER,
        references:{
          model:'vehicles',
          key:'id'
        }
      },
      placa: {
        type: Sequelize.STRING,
        unique: true
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
    await queryInterface.dropTable('User_Vehicles');
  }
};