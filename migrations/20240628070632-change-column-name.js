"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Books", "deliver_check");
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.addColumn("Books", "deliverCheck");
    },
};
