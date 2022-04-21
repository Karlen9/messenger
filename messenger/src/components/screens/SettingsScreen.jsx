import { observer } from 'mobx-react-lite'
import React from 'react'
import { Text, View, Button, Switch, StyleSheet } from 'react-native'
import { AppMode } from '../../store/AppMode'
export const SettingsScreen = observer(({ navigation }) => {
  const [theme, setTheme] = React.useState(false)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings </Text>
      <View style={styles.container}>
        <Text>Night mode</Text>
      </View>
      <Button
        title={'Go to home page'}
        onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
