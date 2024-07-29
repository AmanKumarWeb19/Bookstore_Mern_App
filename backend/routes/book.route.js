import express from "express";
import { getBook } from "../Controller/book.controller.js";

const BookRouter = express.Router();

BookRouter.get("/",getBook)

export default BookRouter