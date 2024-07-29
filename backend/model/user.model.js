import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},{
  versionKey:false
});

const UserModal = mongoose.model("User",userSchema)

export default UserModal