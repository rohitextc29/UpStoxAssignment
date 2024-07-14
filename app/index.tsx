import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Holdings } from "./holdings/Holdings";

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>UpStox Holdings</Text>
      </View>
      <Holdings />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "grey",
  },
  header: {
    backgroundColor: "#800080",
    padding: 10,
  },
  title: {
    color: "#ffffff",
  },
});

export default App;
