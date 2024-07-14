import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const HoldingItem = (props: any) => {
  const { symbol, quantity, ltp, pl } = props;

  return (
    <View style={styles.app}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text>{symbol}</Text>
        <Text>{quantity}</Text>
      </View>
      <View
        style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
      >
        <Text>LTP: {Number(ltp || 0).toFixed(2)}</Text>
        <Text>P/L: {Number(pl || 0).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});
