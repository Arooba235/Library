import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;



const bookSchema = new mongoose.Schema({
    Title: { type: String, required: true, unique: true },
    Author: { type: String, required: true },
    // wins: { type: Number},
    // totalpoints: { type: Number},
    Genre: { type: String}
});

const Book = mongoose.model('Book', bookSchema);

export default Book;