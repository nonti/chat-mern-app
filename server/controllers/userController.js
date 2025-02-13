import User from "../models/userModel.js";

export const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // const allUsers = await User.find({ _id: { $ne: loggedInUserId } });
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

    return res.status(200).json(filteredUsers);



  } catch (error) {
    console.error('Error in getUserForSideBar', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
    
  }
}