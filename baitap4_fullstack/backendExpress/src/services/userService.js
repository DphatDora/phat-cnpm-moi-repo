const bcrypt = require("bcrypt");
const User = require("../models/User");

const SALT_ROUNDS = 10;

async function findUserByEmail(email) {
  return await User.findOne({ where: { email } });
}

async function createUser({ name, email, password, role = "user" }) {
  const existing = await findUserByEmail(email);
  if (existing) {
    const error = new Error("Email đã tồn tại");
    error.statusCode = 409;
    throw error;
  }
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({ name, email, password: hashed, role });
  return user;
}

async function validatePassword(plain, hashed) {
  return await bcrypt.compare(plain, hashed);
}

async function getUserProfile(userId) {
  return await User.findByPk(userId, {
    attributes: ["id", "name", "email", "role"],
  });
}

module.exports = {
  findUserByEmail,
  createUser,
  validatePassword,
};
