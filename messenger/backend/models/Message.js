import Model from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associated(models) {}
  }

  Message.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          len: [1, 128],
        },
      },
      isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
    }
  )
  return Message
}
