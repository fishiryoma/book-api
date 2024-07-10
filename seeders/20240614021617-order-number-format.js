"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Books", [
            {
                order_number: "T0001",
                status: "測試狀態",
                checked: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                name: "tess",
                phone: "123456789",
                quantity: 10,
                msg: "GOOD",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Books", null, {});
    },
};
