import Model from 'sequelize'
import { User } from './User'

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associated(models) {}
  }

  Chat.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
      },
      users: {
        type: [User],
        allowNull: false,
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Chat',
    }
  )
  return Chat
}
