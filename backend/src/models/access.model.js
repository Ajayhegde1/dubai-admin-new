const { DataTypes } = require("sequelize");
const sequelize = require("./dbconnection");

const User = require("./user.model");
const Access = sequelize.define(
  "Access",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
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
    timestamps: false,
  }
);

module.exports = Access;
