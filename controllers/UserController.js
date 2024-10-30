const UserServices = require("../services/UserServices");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isCheckEmail = reg.test(email);

    if (!username || !email || !password) {
      return res.status(400).json({
        status: "ERR",
        message: "All fields are required",
      });
    }

    if (!isCheckEmail) {
      return res.status(400).json({
        status: "ERR",
        message: "Invalid email format",
      });
    }

    const userResponse = await UserServices.createUser({
      username,
      email,
      password,
    });

    return res.status(200).json(userResponse);
  } catch (e) {
    return res.status(500).json({
      message: e.message || "Internal Server Error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isCheckEmail = reg.test(email);

    if (!email || !password) {
      return res.status(400).json({
        status: "ERR",
        message: "All fields are required",
      });
    }

    if (!isCheckEmail) {
      return res.status(400).json({
        status: "ERR",
        message: "Invalid email format",
      });
    }

    const userResponse = await UserServices.loginUser({
      email,
      password,
    });

    return res.status(200).json(userResponse);
  } catch (e) {
    return res.status(500).json({
      message: e.message || "Internal Server Error",
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};
