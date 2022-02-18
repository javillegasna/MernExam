const mongoose = require("mongoose");
const {IP_ROUTE,DB_NAME} = require("../utils/constants")
const {MONGO_DB_URL,MONGO_DB_URL_TEST,NODE_ENV}=process.env;
const envString = NODE_ENV==='test'?MONGO_DB_URL_TEST:MONGO_DB_URL;
const connectionString = envString || `mongodb://${IP_ROUTE}/${DB_NAME}`
const connect = mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to the ${DB_NAME} database`))
	.catch(err => console.log(`Something went wrong when connecting to the ${DB_NAME} database`, err));
	module.exports=connect;