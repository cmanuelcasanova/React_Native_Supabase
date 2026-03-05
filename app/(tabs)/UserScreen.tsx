import BackgroundTheme from "@/components/BackgroundTheme";
import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import SignUp from "@/components/SignUp";
import { Text, View } from "@/components/Themed";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function UserScreen() {
  const user = useAuthStore((store) => store.user);
  const [userMode, setUserMode] = useState<string>("SignIn");

  if (user) return <SignOut />;

  return (
    <BackgroundTheme>
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
            <Text style={{ marginTop: 30 }}>
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
