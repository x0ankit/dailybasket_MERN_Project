import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  user
    ? res.json(user)
    : res.status(404).json({ error: 'User not found' });
};

export const updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  await user.update(req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  await user.destroy();
  res.json({ message: 'User deleted' });
};