import { Feather } from '@expo/vector-icons'

export const ProfileIcon = ({ opacity, color, size }) => {
  return (
    <Feather
      name="user"
      size={size ?? 24}
      color={color ?? 'black'}
      style={{ opacity: opacity ?? 1 }}
    />
  )
}
