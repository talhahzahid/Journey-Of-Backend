import bcrypt from "bcrypt"
import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return
    const hashPassword = bcrypt(this.password, 10)
    this.password = hashPassword
})


export default mongoose.model("User", userSchema)