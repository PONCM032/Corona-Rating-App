module.exports = function (sequelize, DataTypes) {
  //first three are for movies from Aaron's api
  var UserRatings = sequelize.define('UserRatings', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },

    businessType: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userRating: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      max: 5,
      min: 1,
    },

    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    list: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return UserRatings;
};
