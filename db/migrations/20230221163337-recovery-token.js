'use strict';
const { USER_TABLE } = require('./../models/user.model');
//const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn( USER_TABLE, 'recovery_token',{
    fiel: 'recovery_token',
    allowNull: true,
    type: Sequelize.DataTypes.STRING
  });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn( USER_TABLE, 'recovery_token');
  }
};
