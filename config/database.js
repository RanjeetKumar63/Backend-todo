const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection is Successfull"))
    .catch((error) => {
      console.log("Issue in DB Connection");
      console.error(error.message);

      //
      process.exit(0);
    });
};

module.exports = dbConnect;
