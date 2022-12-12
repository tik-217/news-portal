import { DataTypes, Model } from "sequelize";
import sequelize from "../../connection.js";

class Tags extends Model { }

Tags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   notEmpty: true
      // }
    },
  },
  { sequelize, modelName: "tags" }
);

sequelize.sync({ force: false, alter: true });

export default Tags;