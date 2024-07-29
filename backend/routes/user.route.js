import express from "express"
import { SignUp } from "../Controller/user.controller.js"
const UserRouter=express.Router()

UserRouter.post("/signup",SignUp)

export default UserRouter