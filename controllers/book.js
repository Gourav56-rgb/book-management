import Book from "../models/book.js";

export const newBook = async (req, res) => {
  const { title, author, publicationYear } = req.body;

  if (
    !title ||
    !author ||
    !publicationYear ||
    title === "" ||
    author === "" ||
    publicationYear === ""
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newBook = new Book({
    title,
    author,
    publicationYear,
  });

  try {
    await newBook.save();
    res.status(201).json("Book created successfully");
  } catch (error) {
    return res.status(400).json({ error: "Book not created" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      books,
    });
  } catch (error) {
    res.status(404).json({ error: "No books found" });
  }
};

export const filterBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    res.status(200).json({ books });
  } catch (error) {
    res.status(404).json({ error: "No books found" });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json({
      book,
    });
  } catch (error) {
    return res.status(404).json({ error: "Book not found" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          publicationYear: req.body.publicationYear,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(304).json({ error: "Book updation unsuccessful" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("The book has been deleted");
  } catch (error) {
    return res.status(400).json({ error: "Book deletion unsuccessful" });
  }
};
