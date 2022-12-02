import { DataTypes, Model } from "sequelize";
import sequelize from "../../connection.js";

class VerificationToken extends Model { }

VerificationToken.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    token: DataTypes.STRING,
    expires: DataTypes.DATE,
  },
  { sequelize, modelName: "verificationToken" },
);

sequelize.sync({ force: false, alter: true });

export default VerificationToken;