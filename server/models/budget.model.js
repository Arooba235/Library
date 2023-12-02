import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const budgetSchema = new mongoose.Schema({
    amount: { type: Number, required: true }
    // password: { type: String, required: true },
    // wins: { type: Number},
    // totalpoints: { type: Number},
    // usertype: { type: String}
});
  
const Budget = mongoose.model('Budget', budgetSchema);

export default Budget;
