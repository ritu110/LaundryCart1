const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 2200;
const API =
  process.env.DATABASE_URL ||
  "mongodb+srv://ritut1179:noQ7RJFYrcT7vK7L@cluster0.l6q5bia.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

const app = require("./app");
dotenv.config();

async function main() {
  await mongoose.connect(API);
  console.log("connected to database");
  app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
}
main();
