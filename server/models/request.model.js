import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String }
});

const Request = mongoose.model('Request', requestSchema);

export default Request;