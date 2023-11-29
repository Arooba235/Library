import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  staffId: { type: String, required: true },
  staffRating: { type: Number, required: true },
  bookQuality: { type: Number, required: true },
  bookVariety: { type: Number, required: true },
  checkoutExperience: { type: Number, required: true }
});


const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;