const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json());

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server updated");
});


mongoose.connect(
    "mongodb+srv://Admin:12345@backenddb.3edujbj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb"
).then(() => {
    console.log("Connected to Database");
    app.listen(3000, '127.0.0.1', () => {
        console.log("Server is running on port no 3000");
    });
}).catch(() => {
    console.log("Connectioin Failed");
});
