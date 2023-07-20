import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app 3!</Text>
      <Text>{Constants.expoConfig.name}</Text>
      <Text>Squawk!!!!</Text>
      <Image source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
