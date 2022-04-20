import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen } from "./components/screens/ChatScreen";
import { Welcome } from "./components/screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { ProfileScreen } from "./components/screens/ProfileScreen";
import { SettingsScreen } from "./components/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Welcome} />
        <Tab.Screen name="Chats" component={ChatScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
