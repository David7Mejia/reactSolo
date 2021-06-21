'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    keywords: DataTypes.TEXT
  }, {});
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};