import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

interface User {
  name: string;
  number: string;
  password: string;
}

export const LoginScreen = () => {
  const [user, setUser] = React.useState<User>({
    name: "",
    number: "",
    password: "",
  });
  return (
    <View style={style.container}>
      <View style={style.circle} />
      <View style={{ marginTop: 64 }}>
        <Image
          source={require("../../assets/chat.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
});
