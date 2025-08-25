import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Home page
router.get("/", userController.getHomePage);

// Users routes
router.get("/users", userController.getAllUsers);
router.get("/users/create", userController.getCreateUser);
router.post("/users/create", userController.createUser);
router.get("/users/edit/:id", userController.getEditUser);
router.post("/users/edit/:id", userController.updateUser);
router.post("/users/delete/:id", userController.deleteUser);

export default router;
