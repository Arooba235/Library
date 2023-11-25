import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
  managerId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  // Add other manager-specific fields as needed
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
