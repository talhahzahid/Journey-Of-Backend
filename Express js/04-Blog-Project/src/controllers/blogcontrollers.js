import mongoose from "mongoose";
import blogs from "../models/blogmodels.js";

// add blog in database
const addBlog = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(404).json({
      message: "Title and Descriptipion is requires",
    });
  }
  const blog = blogs.create({
    title: title,
    description: description,
  });
  res.status(200).json({
    message: "Data added succesfully in database ",
  });
};

//delete blog in database
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
      message: "Please enter valid id",
    });
  }
  await blogs.findByIdAndDelete(id);
  res.status(200).json({
    message: "Delete Blog Success",
  });
};

//get single blog
const singleBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
      message: "Enter valid id ",
    });
  }
  const user = await blogs.findById(id);
  res.status(200).json({
    user,
  });
};

export { addBlog, deleteBlog, singleBlog };
