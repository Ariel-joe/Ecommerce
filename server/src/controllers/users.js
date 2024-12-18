import { User } from "../database/Models/user.js";

// creating a single user
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (e) {
    console.log(e);

    return res.json({
      success: false,
      message: " failed to create User!",
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
