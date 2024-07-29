import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connection from "./config/db.js"
import BookRouter from "./routes/book.route.js"
const app = express();
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 4000;

// defining Routes:-
app.use("/book",BookRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Not Connected to MongoDb");
    console.log({" msg": "error.message "});
  }
  console.log(`Server is listening on port ${PORT}`);
});
