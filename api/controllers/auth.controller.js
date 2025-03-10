import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    next(errorHandler(400,"all fields are required"));
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash password properly with async method
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Store password with the correct field name
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "SignUp successful" });

  } catch (error) {
    next(error);
  }
};

