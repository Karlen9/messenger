import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export const ChatIcon = ({ opacity, color, size }) => {
  return (
    <Ionicons
      name="chatbubble-ellipses-outline"
      size={size ?? 24}
      color={color ?? 'black'}
      style={{ opacity: opacity ?? 1 }}
    />
  )
}
