import { Model, DataTypes } from "sequelize";
import sequelize from "../../connection.js";

class Articles extends Model { }

Articles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    author_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    main_photo: {
      type: DataTypes.STRING,
      // allowNull: false,
    }
  },
  { sequelize, modelName: "articles" }
)

sequelize.sync({ force: false, alter: true });

export default Articles;