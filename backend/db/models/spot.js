'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    address: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    borough: DataTypes.STRING,
    tite: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Review, { foreignKey: 'spotId' });
  };
  return Spot;
};