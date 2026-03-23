const mongoose = require('mongoose');
const { Schema, model, connect } = mongoose;

async function main() {
    await connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log('Connected to MongoDB');
}
main();

// ---------------- ORDER ----------------
const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = model("Order", orderSchema);

// ---------------- CUSTOMER ----------------
const CustomerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const Customer = model("Customer", CustomerSchema);

// ---------------- INSERT ORDERS ----------------
const addOrder = async () => {
    await Order.insertMany([
        { item: "Samosa", price: 15 },
        { item: "Kachori", price: 20 },
        { item: "Jalebi", price: 30 }
    ]);
};

// ---------------- CREATE CUSTOMER ----------------
const addCustomer = async () => {
    const cust1 = new Customer({
        name: "Astha Mishra"
    });

    let orders = await Order.find({
        item: { $in: ["Samosa", "Kachori"] }
    });

    // Push each order _id
    orders.forEach(order => {
        cust1.orders.push(order);
    });

    let result= await cust1.save();

    console.log("Customer saved:", result);
};
//----------------- SHOW COLLECTION---------
const findUser=async()=>{
    const all=await Customer.find().populate("orders");
    console.log("all Users: ",all[1]);
}

// ---------------- RUN ----------------
    // addCustomer();
    findUser();
