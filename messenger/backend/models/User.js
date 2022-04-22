import Model from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associated(models) {}
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 32],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 32],
        },
      },
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        primaryKey: true,
        deafultValue: DataTypes.UUIDV1,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [9, 11],
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        deafultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
