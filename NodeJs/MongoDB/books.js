const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/booksdb');

main().then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazonLib');
    console.log('Connected to MongoDB');
}
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    author: {
        type: String,
        required: true,
        maxLength: 10   //author cannot exceed 10 characters
    },
    price: {
        type: Number,
        min: 0,
        max: [1000, 'Price cannot exceed 1000']  //custom error message
    },
    publishedDate: {
        type: Date,
    },
    genres: [String],
    inStock: {
        type: Boolean,
        default: true
    }
});
const Book = mongoose.model('Book', bookSchema);

// Create a new book
const book1 = new Book({
    title: 'The Great Gatsby',
    author: 'Fitzgerald',
    price: 12.99,
    publishedDate: new Date('1925-04-10'),
    genres: ['Fiction', 'Classic Literature'],
    inStock: true
});
// book1.save().then((result) => console.log('Book saved successfully', result))
//     .catch(err => console.log(err));

Book.findByIdAndDelete('699ec9ac09ff800e2a0f8129').then((result) => console.log('Book deleted successfully', result))
    .catch(err => console.log(err));
// Find all books
Book.find().then((result) => console.log('Books found successfully', result))
    .catch(err => console.log(err));
Book.findByIdAndUpdate('699e5208145c6a215195c312', { price: 1225.99 }, { new: true, runValidators: true }).then((result) => console.log('Book updated successfully', result))
.catch(err => console.log(err.errors.price.message));