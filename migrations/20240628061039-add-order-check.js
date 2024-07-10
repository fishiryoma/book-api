"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("Books", "pay_check", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.addColumn("Books", "deliver_check", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.renameColumn("Books", "checked", "order_check");
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Books", "pay_check", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.removeColumn("Books", "deliver_check", {
            type: Sequelize.BOOLEAN,
        });
        await queryInterface.renameColumn("Books", "order_check", "checked");
    },
};
