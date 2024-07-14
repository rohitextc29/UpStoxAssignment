import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const BottomDetails = (props: any) => {
  const { profitLoss, currentVal, totalInvestment, todaysProfitLoss } = props;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <View
        style={[styles.app, { paddingVertical: 5, justifyContent: "center" }]}
      >
        {/* <Text onPress={() => setShowDetails(!showDetails)}>
          {showDetails ? "v" : "^"}
        </Text> */}
        {
            showDetails ? <Icon name="arrow-down" size={30} color="#000" onPress={() => setShowDetails(!showDetails)}/> : <Icon name="arrow-up" size={30} color="#000" onPress={() => setShowDetails(!showDetails)}/>
        }
      </View>
      {showDetails ? (
        <>
          <View style={styles.app}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text>Current Value:</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text>{currentVal}</Text>
            </View>
          </View>
          <View style={styles.app}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text>Total Investment:</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text>{totalInvestment}</Text>
            </View>
          </View>
          <View style={styles.app}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text>Today's Profit & Loss:</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text>{todaysProfitLoss}</Text>
            </View>
          </View>
        </>
      ) : null}
      <View style={styles.app}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text>Profit & Loss:</Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
        >
          <Text>{profitLoss}</Text>
        </View>
      </View>
    </>
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
