import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  // Render home page
  getHomePage = (req: Request, res: Response) => {
    res.render("homePage");
  };

  // Render tất cả users
  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      res.render("getAllUsers", { users });
    } catch (error: any) {
      res.status(500).render("getAllUsers", {
        users: [],
        error: error.message,
      });
    }
  };

  // Render form tạo user
  getCreateUser = (req: Request, res: Response) => {
    res.render("createUser");
  };

  // Tạo user mới
  createUser = async (req: Request, res: Response) => {
    try {
      await userService.createUser(req.body);
      res.redirect("/users");
    } catch (error: any) {
      res.status(400).render("createUser", {
        error: error.message,
        formData: req.body,
      });
    }
  };

  // Render form edit user
  getEditUser = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await userService.getUserById(userId);
      res.render("editUser", { user });
    } catch (error: any) {
      res.status(404).redirect("/users");
    }
  };

  // Update user
  updateUser = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      await userService.updateUser(userId, req.body);
      res.redirect("/users");
    } catch (error: any) {
      res.status(400).render("editUser", {
        error: error.message,
      });
    }
  };

  // Delete user
  deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      await userService.deleteUser(userId);
      res.redirect("/users");
    } catch (error: any) {
      res.status(404).redirect("/users");
    }
  };
}

export default new UserController();
