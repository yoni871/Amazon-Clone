import express from "express";
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
 } from "../controllers/userController.js";
 import { protect, admin }from '../middleware/authMiddleware.js';

// The router's job is to match the incoming request's URL and HTTP method to the correct handler function
const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser); //if request is POST to api/users/auth, run the function authUser
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

export default router;