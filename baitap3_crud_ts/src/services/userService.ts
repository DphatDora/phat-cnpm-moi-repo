import models from "../models";
import bcrypt from "bcryptjs";

const { User } = models;

interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: string | null;
  phoneNumber?: string | null;
  gender?: string | null;
  image?: string | null;
  roleId?: string | null;
  positionId?: string | null;
}

interface UpdateUserData {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  address?: string | null;
  phoneNumber?: string | null;
  gender?: string | null;
  image?: string | null;
  roleId?: string | null;
  positionId?: string | null;
}

class UserService {
  async getAllUsers() {
    try {
      return await User.findAll({
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      throw new Error("Không thể lấy danh sách người dùng");
    }
  }

  async getUserById(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Không tìm thấy người dùng");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: CreateUserData) {
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 12);

      // Prepare data for creation - convert undefined to null
      const createData = {
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        address: userData.address || null,
        phoneNumber: userData.phoneNumber || null,
        gender: userData.gender || null,
        image: userData.image || null,
        roleId: userData.roleId || null,
        positionId: userData.positionId || null,
      };

      return await User.create(createData);
    } catch (error: any) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new Error("Email đã tồn tại");
      }
      throw new Error("Không thể tạo người dùng mới");
    }
  }

  async updateUser(id: number, userData: UpdateUserData) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Không tìm thấy người dùng");
      }

      // Prepare update data
      const updateData: any = {};

      if (userData.email !== undefined) updateData.email = userData.email;
      if (userData.firstName !== undefined)
        updateData.firstName = userData.firstName;
      if (userData.lastName !== undefined)
        updateData.lastName = userData.lastName;
      if (userData.address !== undefined)
        updateData.address = userData.address || null;
      if (userData.phoneNumber !== undefined)
        updateData.phoneNumber = userData.phoneNumber || null;
      if (userData.gender !== undefined)
        updateData.gender = userData.gender || null;
      if (userData.image !== undefined)
        updateData.image = userData.image || null;
      if (userData.roleId !== undefined)
        updateData.roleId = userData.roleId || null;
      if (userData.positionId !== undefined)
        updateData.positionId = userData.positionId || null;

      // Hash password if provided
      if (userData.password) {
        updateData.password = await bcrypt.hash(userData.password, 12);
      }

      await user.update(updateData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("Không tìm thấy người dùng");
      }

      await user.destroy();
      return { message: "Xóa người dùng thành công" };
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
