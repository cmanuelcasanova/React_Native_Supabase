import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function UserScreen() {
  const [userMode, setUserMode] = useState<string>("SignIn");

  return (
    <View style={styles.container}>
      {userMode === "SignIn" ? (
        <>
          <SignIn />
          <Text>
            Si no tienes cuenta Registrate{" "}
            <Text
              onPress={() => setUserMode("SignUp")}
              style={{ color: "blue", fontWeight: "bold" }}
            >
              Aqui
            </Text>
          </Text>
        </>
      ) : (
        <>
          <SignUp />
          <Text>
            Si tienes cuenta{" "}
            <Text
              onPress={() => setUserMode("SignIn")}
              style={{ color: "blue", fontWeight: "bold" }}
            >
              Inicia Session
            </Text>
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
