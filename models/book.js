"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Book.init(
        {
            orderNumber: DataTypes.STRING,
            orderCheck: DataTypes.BOOLEAN,
            payCheck: DataTypes.BOOLEAN,
            deliverCheck: DataTypes.BOOLEAN,
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            email: DataTypes.STRING,
            quantity: DataTypes.INTEGER,
            msg: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Book",
        }
    );

    Book.beforeCreate(async (book, option) => {
        const lastBook = await Book.findOne({
            order: [["createdAt", "DESC"]],
        });
        const lastOrderNumber = lastBook
            ? parseInt(lastBook.orderNumber.replace("T", ""), 10)
            : 0;
        const nextOrderNumber = lastOrderNumber + 1;
        book.orderNumber = `T${nextOrderNumber.toString().padStart(4, "0")}`;
    });

    return Book;
};
