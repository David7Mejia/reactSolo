'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    user_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User, {foreginKey: 'user_id'})
    Bookmark.hasMany(models.Image, {foreginKey: 'image_url'})
  };
  return Bookmark;
};
