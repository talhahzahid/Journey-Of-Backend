import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  cnic: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default mongoose.model("StudentsData", studentSchema);
