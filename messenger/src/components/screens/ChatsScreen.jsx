import { Text, View, Button, ScrollView } from 'react-native'
import { ChatView } from './ChatView'

const chats = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
]
export const ChatsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>No chats here yet...</Text> */}
        {chats.map((chat) => (
          <ChatView />
        ))}
      </View>
    </ScrollView>
  )
}
