const mongoose = require('mongoose');
const { Schema, model, connect } = mongoose;

async function main() {
    await connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log('Connected to MongoDB');
}
main()
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });
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


//--------Cascade delete: removes linked orders when customer is deleted--------

CustomerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});

// Mongoose me middleware model banane se pehle define karna hota hai
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
        name: "Harshit ji"
    });

    let orders = await Order.find({
        item: { $in: ["Jalebi", "Kachori"] }
    });

    // Push each order _id
    orders.forEach(order => {
        cust1.orders.push(order);
    });

    let result = await cust1.save();

    console.log("Customer saved:", result);
};
//----------------- SHOW COLLECTION---------
const findUser = async () => {
    const all = await Customer.find().populate("orders");
    console.log("all Users: ", all[2]);
}



//-------------TO ADD A CUSTOMER IN DB------------
const addcust = async () => {
    const newcust = new Customer({
        name: "Narendra Modi"
    })
    const newOrder = new Order({
        item: "Maggi",
        price: 35
    })
    newcust.orders.push(newOrder);
    await newcust.save();
    await newOrder.save();
    console.log("Added new Customer")
}
// ----------------TO DELETE A CUSTOMER----------
const delcust = async () => {
    const delitem = await Customer.findByIdAndDelete("69c2e0d69079ec1d28d4f7cf");
    console.log("Deleted Item is: ", delitem);
}
// ---------------- RUN ----------------
// addCustomer();
findUser();
// addcust(); 
// delcust();


// --------------Notes-------------------
// ----------------------------------------------
// Ye middleware tab trigger hota hai jab koi Customer document
// "findOneAndDelete" ke through delete kiya jata hai.
// Agar us Customer ke saath orders linked hain (orders array me IDs stored),
// to un sabhi orders ko bhi delete kar diya jata hai.
// Is tarah se cascade delete implement hota hai: parent delete hone par
// child records (orders) bhi remove ho jate hain.
// ----------------------------------------------