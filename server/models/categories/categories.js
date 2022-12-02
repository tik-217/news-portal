import { Model, DataTypes } from "sequelize";
import sequelize from "../../connection.js";

class Categories extends Model { }

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  },
  { sequelize, modelName: "categories" }
)

sequelize.sync({ force: false, alter: true });

export default Categories;