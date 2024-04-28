import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"
import bookRoutes from "./routes/book.js"
import bodyParser from "body-parser";

dotenv.config()

mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const server = express();

server.use(express.json());
server.use(bodyParser.json());

server.use("/api/user", userRoutes)
server.use("/api/books", bookRoutes)

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
