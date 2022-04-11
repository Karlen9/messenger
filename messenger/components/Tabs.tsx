import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tabs = [
  {
    title: "Main",
    id: 0,
    onClick: () => {
      console.log("click");
    },
  },
  { title: "Chat", id: 1 },
  { title: "Profile", id: 2 },
];

export const Tabs = () => {
  return (
    <>
      <View style={[style.container]}>
        {tabs.map((tab) => (
          <Text style={[style.tab]} key={tab.id}>
            {tab.title}
          </Text>
        ))}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "flex-end",
  },
  tab: {
    padding: 20,
    width: 150,
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomWidth: 0,
  },
});
