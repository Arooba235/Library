import mongoose from "mongoose";

const fineSchema=new mongoose.Schema({
    studentName:{ type: String, required: true, unique: true },
    Fine:{type: Number, required:true}
})
const Fine=mongoose.model('fine',fineSchema);
export default Fine;