module.exports = function (sequelize, DataTypes) {
  
  var UserRatings = sequelize.define('UserRatings', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      },

    businessAdress: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    businessType: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    businessContactNumber: {
      type: DataTypes.INTEGER,
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

    
  });
  return UserRatings;
};
