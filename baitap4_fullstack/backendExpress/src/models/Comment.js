const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./User");
const Product = require("./Product");

class Comment extends Model {}

Comment.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
      onDelete: "CASCADE",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Product, key: "id" },
      onDelete: "CASCADE",
    },
    comment: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: "Comment",
    tableName: "comments",
  }
);

// Relations
User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Comment, { foreignKey: "productId" });
Comment.belongsTo(Product, { foreignKey: "productId" });

module.exports = Comment;
