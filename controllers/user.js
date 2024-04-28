import User from "../models/user.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" || 
    password === ""
  ) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json("Signup successful");
  } catch (error) {
    return res.status(400).json({ error: 'Signup unsuccessful' })
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ error: 'User not found' })
    }

    const validPassword = password === validUser.password;
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    res.status(200).json("Signin successful");
  } catch (error) {
    return res.status(400).json({ error: 'Signin unsuccessful' })
  }
};
