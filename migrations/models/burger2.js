'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger2 = sequelize.define('Burger2', {
    BurgerName: DataTypes.STRING,
    Devoured: DataTypes.STRING,
    Date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger2;
};