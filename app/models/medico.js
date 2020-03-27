module.exports = (sequelize, DataTypes) => {
  const MedicoEstela = sequelize.define('MedicoEstela', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return MedicoEstela;
}