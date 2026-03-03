import { Text, TextInput, useThemeColor, View } from "@/components/Themed";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function SignIn() {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const TextoTheme = useThemeColor({}, "tabIconDefault");

  return (
    <View style={styles.container}>
      <View>
        <Text> Login </Text>
        <TextInput style={{ marginVertical: 20 }} placeholder="Ingrese Email" />

        <View style={styles.PasswordContainer}>
          <TextInput
            secureTextEntry={viewPassword}
            placeholder="Ingrese Password"
          />

          <Pressable
            onPressIn={() => setViewPassword(false)}
            onPressOut={() => setViewPassword(true)}
          >
            <FontAwesome5 name="eye" size={24} color={TextoTheme} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  textInput: {},

  PasswordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
