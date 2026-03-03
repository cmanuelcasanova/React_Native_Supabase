import { Text, TextInput, View, useThemeColor } from "@/components/Themed";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const TextoTheme = useThemeColor({}, "tabIconDefault");

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}> Registro de Usuario </Text>

      <TextInput
        style={{ marginBottom: 20 }}
        secureTextEntry={viewPassword}
        placeholder="Nombre de Usuario"
      />
      <TextInput style={{ marginBottom: 20 }} placeholder="Ingrese Email" />

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

      <View style={styles.PasswordContainer}>
        <TextInput
          secureTextEntry={viewPassword}
          placeholder="Repita Password"
        />

        <Pressable
          onPressIn={() => setViewPassword(false)}
          onPressOut={() => setViewPassword(true)}
        >
          <FontAwesome5 name="eye" size={24} color={TextoTheme} />
        </Pressable>
      </View>

      <TouchableOpacity style={styles.ButonOpacity}>
        <Text> Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ButonOpacity: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 7,
    textAlign: "center",
  },

  PasswordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
