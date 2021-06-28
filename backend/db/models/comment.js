'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    image_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey: 'user_id'})
    Comment.belongsTo(models.Image, {foreignKey: 'image_id'})
  };
  return Comment;
};
