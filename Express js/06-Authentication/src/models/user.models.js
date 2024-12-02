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
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    next();
});


export default mongoose.model("User", userSchema)