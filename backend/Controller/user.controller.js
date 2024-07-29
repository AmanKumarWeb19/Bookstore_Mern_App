import UserModel from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const SignUp =async(req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user =await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "user already exist" });
    }
    const hassPassword=await bcryptjs.hash(password,8)
    const createdUser = new UserModel({ fullname, email, password:hassPassword});
    await createdUser.save();
    res.status(201).send({ message: "user created successfully" });
  } catch (error) {
    console.log({ msg: error.message });
    res.status(500).send({ message: "Internal Server Error" });
  }
};
