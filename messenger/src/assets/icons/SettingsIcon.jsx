import { SimpleLineIcons } from '@expo/vector-icons'

export const SettingsIcon = ({ opacity, color, size }) => {
  return (
    <SimpleLineIcons
      name="settings"
      size={size ?? 24}
      color={color ?? 'black'}
      style={{ opacity: opacity ?? 1 }}
    />
  )
}
