const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { models } = require('../models');
const User = models.User;

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
	const Existuser = await User.findOne({ where: { email } });
    if (Existuser) {
      return res.status(201).json({ msg: 'User Allready Register' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, 'Login_secret_key', { expiresIn: '10h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
