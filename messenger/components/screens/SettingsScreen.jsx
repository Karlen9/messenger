import { Text, View, Button } from "react-native";
export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings</Text>
      <Button
        title={"Go to home page"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
   