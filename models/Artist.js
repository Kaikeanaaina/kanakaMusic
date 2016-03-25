module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    title: DataTypes.STRING
  }, {
    classMethods : {
      associate : function(models) {
        Artist.belongsTo(models.RecordLabel);
        Artist.belongsTo(models.Publisher);
        Artist.hasMany(models.Album);
        Artist.hasMany(models.Song);
        Artist.hasMany(models.Gigs);
      }
    }
  });

  return Artist;
};