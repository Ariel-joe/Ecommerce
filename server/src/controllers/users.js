import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../database/Models/user.js";

// token for login after user registeration
const createToken = () => {
  return jwt.sign({id}, )
};

// login User

export const loginUser = async (req, res) => {
  res.json({
    message: "login API working",
  });
};

// register User

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking if email already in user

    const exists = await User.findOne({ email });

    if (exists) {
      return res.json({
        success: false,
        message: "user already exists",
      });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    // hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
  } catch (error) {}
};

// admin login
export const adminLogin = async (req, res) => {
  res.json({
    message: "admin API working",
  });
};

// creating a single user
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (e) {
    console.log(e);

    return res.json({
      success: false,
      message: "please fill all the required fields",
    });
  }
};

// fetching the all users
export const getusers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "unable to get users",
    });
  }
};

// editing a user
export const editUser = async (req, res) => {
  const userId = req.query.id;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });

    return res.status(201).json({
      success: true,
      data: updatedUser,
    });
  } catch (e) {
    return res.json({
      success: false,
      message: "failed to update the user profile",
    });
  }
};

// delete existing user
export const deleteUser = async (req, res) => {
  const userId = req.query.id;

  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId });

    return res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "failed to remove user!",
    });
  }
};
