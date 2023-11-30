import mongoose from 'mongoose';

const checkoutSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});
const Checkout = mongoose.model('Checkout', checkoutSchema);
export default Checkout;