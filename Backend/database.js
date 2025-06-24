const mongoose = require('mongoose');
const dbconnect = async () => {
    mongoose.connect("mongodb://localhost:27017/BookData").then(() => {
        console.log("Database connected 👍👍👍 successfully");
    }).catch((err) => {
        console.log("Database connection failed", err);
    });
};
module.exports = dbconnect;