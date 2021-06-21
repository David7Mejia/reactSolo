'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    user_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};