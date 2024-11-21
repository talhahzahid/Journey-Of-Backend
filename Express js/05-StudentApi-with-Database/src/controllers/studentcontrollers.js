import mongoose from "mongoose";
import StudentsData from "../models/studentmodels.js";

// add student in database
const registerStudent = (req, res) => {
  const { name, fathername, email, phonenumber, cnic, gender } = req.body;
  if (!name || !fathername || !email || !phonenumber || !cnic || !gender) {
    return res.status(404).json({
      " message": "All feilds are required...",
    });
  }
  const studentDataAddDatabase = StudentsData.create({
    name: name,
    fathername: fathername,
    email: email,
    phonenumber: phonenumber,
    cnic: cnic,
    gender: gender,
  });
  res.status(200).json({
    message: "Now your are register successfully",
  });
};

// delete student in database
const deleteStudent = async (req, res) => {
  const deleteThisUser = await StudentsData.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "User Deleted Successfully",
    deleteThisUser,
  });
};

export { registerStudent, deleteStudent };
