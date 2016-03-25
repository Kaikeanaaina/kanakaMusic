module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    description : DataTypes.TEXT,
    urlTitle: DataTypes.TEXT,
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    line3: DataTypes.STRING,
    line4: DataTypes.STRING,
    line5: DataTypes.STRING,
    line6: DataTypes.STRING,
    line7: DataTypes.STRING,
    line8: DataTypes.STRING,
    line9: DataTypes.STRING,
    line10: DataTypes.STRING,
    line11: DataTypes.STRING,
    line12: DataTypes.STRING,
    line13: DataTypes.STRING,
    line14: DataTypes.STRING,
    line15: DataTypes.STRING,
    line16: DataTypes.STRING,
    line17: DataTypes.STRING,
    line18: DataTypes.STRING,
    line19: DataTypes.STRING,
    line20: DataTypes.STRING,
    line21: DataTypes.STRING,
    line22: DataTypes.STRING,
    line23: DataTypes.STRING,
    line24: DataTypes.STRING,
    line25: DataTypes.STRING,
    line26: DataTypes.STRING,
    line27: DataTypes.STRING,
    line28: DataTypes.STRING,
    line29: DataTypes.STRING,
    line30: DataTypes.STRING,
  }, {
    classMethods: {
      associate : function(models) {
        Song.belongsTo(models.Artist);
        Song.belongsTo(models.Album);
      }
    }
  });

  return Song;
};