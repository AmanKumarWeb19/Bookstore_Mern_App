import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connection from "./config/db.js"
import BookRouter from "./routes/book.route.js"
import UserRouter from "./routes/user.route.js"
const app = express();
app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000;

// defining Routes:-
app.use("/book",BookRouter)
app.use("/user",UserRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Not Connected to MongoDb");
    console.log({" msg": error.message});
  }
  console.log(`Server is listening on port ${PORT}`);
});
