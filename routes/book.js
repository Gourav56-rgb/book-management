import express from "express";
import { deleteBook, filterBooksByAuthor, getBook, getBooks, newBook, updateBook } from "../controllers/book.js";

const router = express.Router()

router.post("/new", newBook)
router.get("/getbooks", getBooks)
router.get("/:author", filterBooksByAuthor)
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook)

export default router