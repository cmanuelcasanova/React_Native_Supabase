import BackgroundTheme from "@/components/BackgroundTheme";
import { StyleSheet, Text, View } from "react-native";

export default function Config() {
  return (
    <BackgroundTheme>
      <View style={styles.container}>
        <View className="p-20 bg-red-600 rounded-2xl">
          <Text className="text-white"> Aplication Settings </Text>
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
