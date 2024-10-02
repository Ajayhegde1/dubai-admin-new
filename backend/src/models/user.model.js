const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "teamLead", "user"),
      allowNull: false,
    },
    passportAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    visaAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    flightAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    registrationAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    advertisementAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    formCollectionAccess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
