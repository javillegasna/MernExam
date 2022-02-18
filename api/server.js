require('dotenv').config();
const {ROUTE_NAME}=require("./server/utils/constants");
const Router = require(`./server/routes/${ROUTE_NAME}.routes`);
const db = require("./server/config/mongoose.config");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT= process.env.PORT_API || 8000
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
const server = app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));
// eslint-disable-next-line no-unused-expressions
db.connect;
Router(app);
module.exports = {app,server}