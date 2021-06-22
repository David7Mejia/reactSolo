'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    keywords: DataTypes.TEXT
  }, {});
  Collection.associate = function(models) {
    Collection.belongsTo(models.User, {foreignKey: 'user_id'})
    Collection.hasMany(models.Image, {foreignKey: 'image_url'})
  };
  return Collection;
};
