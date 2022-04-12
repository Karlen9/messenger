import React from "react";
import { Text, View, StyleSheet } from "react-native";

const chats = [
  { firstName: "Name1", message: "wouforghr" },
  { firstName: "Name2", message: "kwrgnwnfwer" },
];

export const Chats = () => {
  return (
    <View>
      {chats.map((chat) => (
        <>
          <View></View>
          <View style={[style.container]}>
            <Text>{chat.firstName}</Text>
            <Text>{chat.message}</Text>
          </View>
        </>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
