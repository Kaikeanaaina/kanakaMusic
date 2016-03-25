module.exports = function(sequelize, DataTypes) {
  var Album = sequelize.define("Album", {
    title: DataTypes.STRING,
    record_label : DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models) {
        Album.belongsTo(models.Artist);
        Album.hasMany(models.Song);
      }
    }
  });

  return Album;
};