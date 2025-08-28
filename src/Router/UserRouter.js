const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload");
const { 
  registerUser, 
  loginUser, 
  adminGetAllUsers, 
  adminDeleteUser, 
  recruiterGetProfile, 
  recruiterUpdateProfile, 
  uploadPhoto 
} = require("../Controller/UserController");
const authMiddleware = require("../Middleware/UserMiddleware");

// Register & Login
router.post("/register", upload.single("photo"), registerUser);
router.post("/login", loginUser);

// Admin
router.get("/admin/users", adminGetAllUsers);
router.delete("/admin/user/:id",adminDeleteUser);

// Recruiter
router.get("/recruiter/profile", authMiddleware, recruiterGetProfile);
router.put("/recruiter/profile", authMiddleware, recruiterUpdateProfile);

// Upload Profile Photo
router.put("/upload-photo", authMiddleware, upload.single("photo"), uploadPhoto);

module.exports = router;
