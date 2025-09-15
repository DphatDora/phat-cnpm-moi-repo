const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./User");
const Product = require("./Product");

class Purchase extends Model {}

Purchase.init(
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
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Purchase",
    tableName: "purchases",
  }
);

// Relations
User.hasMany(Purchase, { foreignKey: "userId" });
Purchase.belongsTo(User, { foreignKey: "userId" });

Product.hasMany(Purchase, { foreignKey: "productId" });
Purchase.belongsTo(Product, { foreignKey: "productId" });

module.exports = Purchase;
