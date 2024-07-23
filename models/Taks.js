const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: { 
    type: String, 
    required: true },
  date: { 
    type: Date, 
    default: Date.now },
  edited: { 
    type: Date, 
    default: null },
});

module.exports = mongoose.model("Task", taskSchema);
