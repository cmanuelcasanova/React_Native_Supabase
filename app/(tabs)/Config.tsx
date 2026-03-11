import BackgroundTheme from "@/components/BackgroundTheme";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css";

export default function Config() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <BackgroundTheme>
      <View style={styles.container}>
        <View className="p-20 bg-red-600 rounded-2xl">
          <Text className="text-white"> Aplication Settings </Text>

          <SegmentedControl
            tintColor="orange"
            fontStyle={{ color: "black" }}
            style={{ height: 50, width: 300 }}
            values={["Dolar", "Binance"]}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
        </View>
      </View>
    </BackgroundTheme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "00000000",
  },

  ButonOpacity: {
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 10,
    padding: 7,
    textAlign: "center",
    width: 150,
    marginTop: 20,
  },
});
