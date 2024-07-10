"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("Books", "name", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Books", "phone", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn("Books", "address", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Books", "email", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Books", "quantity", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn("Books", "msg", {
            type: Sequelize.STRING,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Books", "name", {
            type: Sequelize.STRING,
        });
        await queryInterface.removeColumn("Books", "phone", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.removeColumn("Books", "address", {
            type: Sequelize.STRING,
        });
        await queryInterface.removeColumn("Books", "email", {
            type: Sequelize.STRING,
        });
        await queryInterface.removeColumn("Books", "quantity", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.removeColumn("Books", "msg", {
            type: Sequelize.STRING,
        });
    },
};
