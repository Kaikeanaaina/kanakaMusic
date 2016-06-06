module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username : {
      type: DataTypes.STRING( 255 ),
      allowNull: false
    },
    password : {
      type: DataTypes.STRING( 255 ),
      allowNull: false
    },
    type : {
      type: DataTypes.STRING( 20 ),
      allowNull: false
    },
  });

  return Users;
};