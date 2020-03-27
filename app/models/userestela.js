module.exports = (sequelize, DataTypes) => {
    const UserEstela = sequelize.define('UserEstela', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  
    return UserEstela;
}