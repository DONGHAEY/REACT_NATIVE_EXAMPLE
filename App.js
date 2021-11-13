import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Hanbit";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() => {
          if (name === "Hanbit") return "Myname is Habit";
          else if (name === "Beomjun") return "Myname is Beomjun";
          else return "Myname is ReactNative";
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
