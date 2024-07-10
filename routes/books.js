const express = require("express");
const router = express.Router();

const db = require("../models");
const { col } = require("sequelize");
const Book = db.Book;

router.get("/", async (req, res) => {
    const result = await Book.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (result) {
        return res.status(200).json({ data: result, success: true });
    } else return res.status(400).json({ message: "Get Order Fail" });
});

router.get("/order", async (req, res) => {
    const search = req.query.number.toUpperCase();
    const result = await Book.findOne({
        where: { orderNumber: search },
    });
    if (result) {
        return res.status(200).json({ success: true, data: result });
    } else return res.status(400).json({ message: "Invalid order number" });
});

router.post("/order", async (req, res) => {
    const body = req.body;
    console.log(body);
    const newOrder = await Book.create({
        orderCheck: false,
        payCheck: false,
        deliverCheck: false,
        name: body.name,
        phone: body.phone,
        address: body.address,
        email: body.email,
        quantity: body.quantity,
        msg: body.msg,
    });
    if (newOrder) {
        return res
            .status(200)
            .json({ success: true, orderNumber: newOrder.orderNumber });
    } else return res.status(400).json({ message: "Add New Order Fail" });
});

router.delete("/order/:id", async (req, res) => {
    const id = req.params.id;
    const result = await Book.destroy({ where: { id } });
    if (result) {
        return res.status(200).json({ success: true });
    } else return res.status(400).json({ message: "Delete Fail" });
});

router.put("/order/update", async (req, res) => {
    const body = req.body;
    const updatePromise = body.map(
        async (update) =>
            await Book.update(
                {
                    orderCheck: update.orderCheck,
                    payCheck: update.payCheck,
                    deliverCheck: update.deliverCheck,
                },
                { where: { id: update.id } }
            )
    );

    const result = await Promise.all(updatePromise);
    if (result) {
        return res.status(200).json({ success: true });
    } else return res.status(400).json({ message: "Update Fail" });
});

module.exports = router;
