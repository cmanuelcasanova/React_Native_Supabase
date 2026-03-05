import BackgroundTheme from "@/components/BackgroundTheme";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function Config() {
  return (
    <BackgroundTheme>
      <View style={styles.container}>
        <View>
          <Text> Aplication Settings </Text>
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
