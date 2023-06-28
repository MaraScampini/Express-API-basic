'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.appointment.belongsTo(models.user,{
        foreignKey: 'user_id'
      })
    }
  }
  appointment.init({
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};