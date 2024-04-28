Book Management API
This is a simple Node.js API for managing books. It provides CRUD operations for book entries, allows filtering books by author or publication year, implements basic security measures, and includes user authentication.

Features
CRUD operations for managing book entries (Create, Read, Update, Delete).
Filtering books by author or publication year.
Input validation to ensure data integrity and security.

API Endpoints

Authentication
POST /api/user/signup: Register a new user.
POST /api/user/signin: Log in an existing user.
Book Management
GET /api/books/getbooks: Get all books.
GET /api/books/:id: Get a single book by ID.
POST /api/books/new: Create a new book entry.
PUT /api/books/:id: Update a book by ID.
DELETE /api/books/:id: Delete a book by ID.

Filtering
GET /api/books/:author: Filter books by author.
