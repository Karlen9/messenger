import { Text, View, Button } from "react-native";
export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <Button
        title={"Go to home page"}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
   