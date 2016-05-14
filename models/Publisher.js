module.exports = function(sequelize, DataTypes) {
  var Publisher = sequelize.define("Publisher", {
    name: DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models) {
        Publisher.hasMany(models.Album);
      }
    }
  });

  return Publisher;
};