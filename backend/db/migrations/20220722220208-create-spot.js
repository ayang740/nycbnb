'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      neighborhood: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      borough: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      guests: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      beds: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      baths: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};