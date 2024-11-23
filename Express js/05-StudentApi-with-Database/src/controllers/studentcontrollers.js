import mongoose from "mongoose";
import StudentsData from "../models/studentmodels.js";
import studentmodels from "../models/studentmodels.js";

// add student in database
const registerStudent = async (req, res) => {
  const { name, fathername, email, phonenumber, cnic, gender } = req.body;
  if (!name || !fathername || !email || !phonenumber || !cnic || !gender) {
    return res.status(404).json({
      " message": "All feilds are required...",
    });
  }
  const studentDataAddDatabase = await StudentsData.create({
    name: name,
    fathername: fathername,
    email: email,
    phonenumber: phonenumber,
    cnic: cnic,
    gender: gender,
  });
  res.status(200).json({
    message: "Now your are register successfully",
    studentDataAddDatabase,
  });
};

// get all student in database
const getAllStudent = async (req, res) => {
  const allStudent = await StudentsData.find({});
  res.status(200).json({
    allStudent,
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

// edit student in database
const editStudentFromDatabase = async (req, res) => {
  const { id } = req.params;
  const { name, fathername, email, phonenumber, cnic, gender } = req.body;
  const updateStudent = await StudentsData.findByIdAndUpdate(id, {
    name: name,
    fathername: fathername,
    email: email,
    phonenumber: phonenumber,
    cnic: cnic,
    gender: gender,
  });
  res.status(200).json({
    Messaga: "Student Update Successfully ",
  });
};

export {
  registerStudent,
  getAllStudent,
  deleteStudent,
  editStudentFromDatabase,
};
