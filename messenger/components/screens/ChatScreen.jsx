import { Text, View, Button } from "react-native";
export const ChatScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chats</Text>
      <Button
        title={"Go to home page"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
  