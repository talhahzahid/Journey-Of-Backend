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
        type: age,
        required: true,
      },
      cnic: {
        type: age,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
})


export default mongoose.model('StudentsData' , studentSchema)
