const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


router.post('/register', async (req, res) => {

console.log(req.body);  // Debug line
const { username, email, password } = req.body;

const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: 'User created', user: newUser });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  
  res.json({
    message: 'Logged in',
    token,
    username: user.username
  });
});


router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});


module.exports = router;
