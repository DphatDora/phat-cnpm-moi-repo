const jwt = require("jsonwebtoken");
const User = require("../models/User");
const {
  createUser,
  findUserByEmail,
  validatePassword,
} = require("../services/userService");

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
}

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Thiếu name, email hoặc password" });
    }
    const user = await createUser({ name, email, password });
    const { id, role } = user;
    return res.status(201).json({
      message: "Đăng ký thành công",
      user: { id, name, email, role },
    });
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({ message: error.message || "Lỗi server" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Thiếu email hoặc password" });
    }
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }
    const isValid = await validatePassword(password, user.password);
    if (!isValid) {
      return res
        .status(401)
        .json({ message: "Email hoặc mật khẩu không đúng" });
    }
    const token = generateToken({ id: user.id, role: user.role });
    const { id, name, role } = user;
    return res.json({
      message: "Đăng nhập thành công",
      token,
      user: { id, name, email, role },
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server" });
  }
}

async function profile(req, res) {
  const user = await User.findByPk(req.user.id, {
    attributes: ["id", "name", "email", "role"],
  });
  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy user" });
  }
  return res.json({ user });
}

module.exports = {
  register,
  login,
  profile,
};
