'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    collections_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    keywords: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, {foreignKey: 'user_id'})
    Image.belongsTo(models.Collection, {foreignKey: 'collections_id'})
  };
  return Image;
};
