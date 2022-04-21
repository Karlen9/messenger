import { observer } from 'mobx-react-lite'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
const userAvatar = false
export const ChatView = observer(() => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: '100%', height: '100%', flex: 1, flexDirection: 'row' }}
      >
        <Image
          source={require('./../../assets/img/user.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Alex Sorilio</Text>
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 70,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#bfc0c0',
    padding: 10,
  },

  image: {
    width: 50,
    height: 50,
  },

  name: {
    marginLeft: 10,
    color: '#0d1321',
  },
})
