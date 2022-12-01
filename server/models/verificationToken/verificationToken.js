import { DataTypes, Model } from "sequelize";
import sequelize from "../../connection.js";

class VerificationToken extends Model { }

VerificationToken.init(
  {
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

export default VerificationToken;