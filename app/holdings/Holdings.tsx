import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import { HoldingItem } from "./HoldingItem";
import { BottomDetails } from "./BottomDetails";
import { fetchData } from "./fetchData";

export const Holdings = (props: any) => {
  const [holdingList, setHoldingList] = React.useState(null);
  const [bottomDetails, setBottomDetails] = React.useState({});

  React.useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const { holdings, details } = await fetchData();
    setHoldingList(holdings);
    setBottomDetails(details);
  };

  return (
    <>
      <FlatList
        data={holdingList}
        renderItem={({ item }) => <HoldingItem {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={(props) => {
          return <View style={styles.seperator} />;
        }}
      />
      <BottomDetails {...bottomDetails} />
    </>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
  },
});
