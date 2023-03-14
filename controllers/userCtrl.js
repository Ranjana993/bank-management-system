import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js";
import dotenv from 'dotenv'

dotenv.config()


// login callback
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(200).send({ message: "user not found", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "Invlid EMail or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).send({ message: "Login Success", success: true, token });

  }
  catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error}` });
  }
};



// adding user
export const addUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res.status(200).send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};



// getting all users list .....
export const gettingAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    // console.log(allUsers);
    return res.status(200).send({ count: allUsers.length, success: true, allUsers })

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error while geeting all users ${error}` });
  }
}



// update all users ...

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await userModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
    return res.status(200).send({ success: true, message: "successfully updated", updated })

  }
  catch (error) {
    return res.status(400).send({ success: false, message: "Errror in updating  user ", error })
  }
}


// deleting user ...
export const deleteUser = async (req, res) => {
  try {
    await userModel.findOneAndDelete(req.params.id);
    return res.status(200).send({ success: true, message: "successfully deleted " });
  }
  catch (error) {
    return res.status(400).send({ success: false, message: "Errror in deleting  user ", error })
  }
}