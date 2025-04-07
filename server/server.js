require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const users = [
  {
    id: "1",
    email: "user@example.com",
    password: "password",
  },
];

app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const accessToken = jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken });
});

app.post("/api/refresh-token", (req, res) => {
  const { accessToken } = req.body;
  const refreshToken = req.cookies.refreshToken;

  let newAccessToken = null;

  try {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, { ignoreExpiration: true });
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token" });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    newAccessToken = jwt.sign({ userId: decoded.userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  } catch (error) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }

  res.json({ accessToken: newAccessToken });
});

app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "Protected data" });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
