import { DataTypes, Model } from "sequelize";
import sequelize from "../../connection.js";

class Users extends Model { }
class Account extends Model { }
class Session extends Model { }

Users.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    email_verified: DataTypes.DATE,
    image: DataTypes.STRING,
  },
  { sequelize, modelName: "users" },
  {
    include: [Account, Session]
  },
);

Account.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
    },
    type: DataTypes.STRING,
    provider: DataTypes.STRING,
    providerAccountId: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    accessToken: DataTypes.STRING,
    expires_at: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    tokenType: DataTypes.STRING,
    scope: DataTypes.STRING,
    id_token: DataTypes.STRING,
    session_state: DataTypes.STRING,
    oauth_token_secret: DataTypes.STRING,
    oauth_token: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  { sequelize, modelName: "account" }
);

Session.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    expires: DataTypes.DATE,
    sessionToken: DataTypes.STRING,
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  { sequelize, modelName: "session" }
);

Users.hasMany(Account);
Users.hasMany(Session);

sequelize.sync({ force: false, alter: true });

export default Users;