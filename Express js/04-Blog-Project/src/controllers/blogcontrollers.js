import mongoose from "mongoose";
import blogs from "../models/blogmodels.js";

const addBlog = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(404).json({
      "message": "Title and Descriptipion is requires",
    });
  }
  const blog = blogs.create({
    title: title,
    description: description,
  });
  res.status(200).json({
    "message": "Data added succesfully in database ",
  });
};

export { addBlog };
