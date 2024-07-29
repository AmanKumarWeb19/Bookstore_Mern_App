import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  filename: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModal = mongoose.model("User",userSchema)

export default UserModal