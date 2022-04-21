import { Feather } from '@expo/vector-icons'

export const HomeIcon = ({ opacity, color, size }) => {
  return (
    <Feather
      name="home"
      size={size ?? 24}
      color={color ?? 'black'}
      style={{ opacity: opacity ?? 1 }}
    />
  )
}
