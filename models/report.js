"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.User);
    }
  }
  Report.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Name Cannot Be Empty" },
          notNull: { msg: "Name Cannot Be Empty" },
        },
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Message Cannot Be Empty" },
          notNull: { msg: "Message Cannot Be Empty" },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Phone Number Cannot Be Empty" },
          notNull: { msg: "Phone Number Cannot Be Empty" },
        },
      },
      long: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Long Cannot Be Empty" },
          notNull: { msg: "Long Cannot Be Empty" },
        },
      },
      lat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Lat Cannot Be Empty" },
          notNull: { msg: "Lat Cannot Be Empty" },
        },
      },
      photo: {
        type: DataTypes.STRING,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "UserId Cannot Be Empty" },
          notNull: { msg: "UserId Cannot Be Empty" },
        },
      },
    },

    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
