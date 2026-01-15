require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const uri = process.env.MONGO_STR;

const  connectToDatabase = async () =>{
        try {
                await mongoose.connect(uri);
                console.log("MongoDB connected");
        } catch (err) {
                console.error("Failed to connect to MongoDB", err);
        }
}
connectToDatabase();


// Enable CORS for all routes
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse request body JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse request body

const BusinessRouter = require('./api/routes/businessRoutes');
app.use("/business", BusinessRouter);

const InventoryRouter = require('./api/routes/inventoryRoutes');
app.use("/inventory", InventoryRouter);

const OrderRouter = require('./api/routes/orderRoutes');
app.use("/order", OrderRouter);

const StatiscticRouter = require('./api/routes/statsRoutes');
app.use("/sta", StatiscticRouter);



module.exports = app;
