import express from "express";
import dotenv from "dotenv";
import configViewEngine from "./config/viewEngine";
import userRoutes from "./routes/userRoutes";
import db from "./models";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", userRoutes);

app.use((req, res) => {
  res.status(404).send(`<h1>404 - Trang không tìm thấy</h1>
    <p><a href="/">Quay về trang chủ</a></p>`);
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", err);
    res.status(500).send(`<h1>500 - Lỗi máy chủ</h1>
    <p>Đã xảy ra lỗi trong quá trình xử lý yêu cầu.</p>
    <p><a href="/">Quay về trang chủ</a></p>`);
  }
);

const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Kết nối database thành công");

    if (process.env.NODE_ENV === "development") {
      await db.sequelize.sync({ alter: true });
      console.log("✅ Đồng bộ database thành công");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Không thể khởi động server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
