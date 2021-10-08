"use strict";
const { Model } = require("sequelize");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class category_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category_tag.belongsTo(models.category, {
        foreignKey: "category_id",
      });

      category_tag.belongsTo(models.tag, {
        foreignKey: "tag_id",
      });
    }
  }
  category_tag.init(
    {
      category_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "category_tag",
    }
  );
  return category_tag;
};
