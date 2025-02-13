import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {

  try {
  const { fullName,email, username, password, confirmPassword, gender } = req.body;
    if(password !== confirmPassword){
      return res.status(400).json({error: 'Passwords do not match'});
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    //Hash password

    // Avatar API https://avatar-placeholder.iran.liara.run/
    const boyProfileImg = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfileImg = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser  = new User({
      fullName,
      email,
      username,
      password,
      gender,
      profileImage: gender ==='male'? boyProfileImg : girlProfileImg,
    });

    if(newUser){
      generateTokenAndSetCookie(newUser._id, res)

      await newUser.save();
      res.status(201).json({ 
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        username: newUser.username,
        profileImage: newUser.profileImage,
        message: 'User registered successfully' });
      } else {
        res.status(400).json({ error: 'Failed to register user' });
      }

  } catch (error) {
    console.log('Error in signup controller:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const login = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const passwordMatch = await bcrypt.compare(password, user?.password || '');

    if(!user || !passwordMatch){
      return res.status(404).json({error: 'Invalid username or password'});
    }
    
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImage: user.profileImage,
    });
    
  } catch (error) {
    console.log('Error in login controller:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log('Error in logout controller:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};