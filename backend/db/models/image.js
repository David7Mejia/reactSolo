'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    user_id: DataTypes.INTEGER,
    collections_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    keywords: DataTypes.TEXT
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};