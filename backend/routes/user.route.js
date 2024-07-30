import express from "express"
import { Login, SignUp } from "../Controller/user.controller.js"
const UserRouter=express.Router()

UserRouter.post("/signup",SignUp)
UserRouter.post("/login",Login)

export default UserRouter