module.exports = function (sequelize, DataTypes) {
  
  var UserRatings = sequelize.define('UserRatings', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      },

    businessAddress: {
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

    masksMandated: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    masksReinforced: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    openArea: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    distanceMarkers: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    crowdControl: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },

    lat:{
      type:DataTypes.STRING,
      allowNull:false
    },

    lng:{
      type:DataTypes.STRING,
      allowNull:false
    }

  });
  return UserRatings;
};
