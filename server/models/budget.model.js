import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const budgetSchema = new mongoose.Schema({
    amount: { type: Number, required: true }
});
  
const Budget = mongoose.model('Budget', budgetSchema);

export default Budget;
