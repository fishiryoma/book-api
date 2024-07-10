"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("Books", "payCheck", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.addColumn("Books", "deliverCheck", {
            type: Sequelize.BOOLEAN,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Books", "payCheck", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.removeColumn("Books", "deliverCheck", {
            type: Sequelize.BOOLEAN,
        });
    },
};
