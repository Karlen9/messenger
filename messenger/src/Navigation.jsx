import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChatScreen } from './components/screens/ChatScreen'
import { ChatIcon } from './assets/icons/ChatIcon'
import { ProfileScreen } from './components/screens/ProfileScreen'
import { LoginScreen } from './components/screens/LoginScreen'
import { SettingsScreen } from './components/screens/SettingsScreen'
import { SettingsIcon } from './assets/icons/SettingsIcon'
import { ProfileIcon } from './assets/icons/ProfileIcon'

const Tab = createBottomTabNavigator()

const isSignedIn = false

export const Navigation = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={isSignedIn ? 'Profile' : 'Sign In'}
        component={isSignedIn ? ProfileScreen : LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Profile') {
              focused = true
            } else if (route.name === '!Profile') {
              focused = false
            }
            return <ProfileIcon opacity={focused ? 1 : 0.5} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Chats') {
              focused = true
            } else if (route.name === '!Chats') {
              focused = false
            }
            return <ChatIcon opacity={focused ? 1 : 0.5} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Settings') {
              focused = true
            } else if (route.name === '!Settings') {
              focused = false
            }
            return <SettingsIcon opacity={focused ? 1 : 0.5} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  )
}
