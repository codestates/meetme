'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.belongsToMany(models.category, {
        through: 'category_tag',
        foreignKey: 'tag_id'
      });
    }
  }
  tag.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'tag'
    }
  );
  return tag;
};
