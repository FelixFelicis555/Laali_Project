const dotenv = require("dotenv");

dotenv.config();

module.exports = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.81xsxih.mongodb.net/?retryWrites=true&w=majority`;