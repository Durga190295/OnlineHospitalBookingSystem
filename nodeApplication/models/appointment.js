const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    }
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  sex: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  fromTime: {
    type: Date,
    required: true,
    trim: true,
    lowercase: true,
  },
  toTime: {
    type: Date,
    required: true,
    trim: true,
    lowercase: true,
  }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;