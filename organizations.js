"use strict";
module.exports = function(sequelize, DataTypes) {
  var Organizations = sequelize.define("Organizations", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    orgName: DataTypes.STRING,
    contactInfo: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Organizations.hasMany(models.TimeRecords);
      }
    }
  });
  return Organizations;
};
