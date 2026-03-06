import { Text, View } from "@/components/Themed";
import { supabase } from "@/src/lib/supabase";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Toast } from "toastify-react-native";
import BackgroundTheme from "./BackgroundTheme";

export default function SignOut() {
  const { signOut, user } = useAuthStore((store) => store);
  const queryClient = useQueryClient();

  const [isLoading, setIsloading] = useState<boolean>(false);
  const LogOut = async () => {
    setIsloading(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error.message);
      return;
    }
    Toast.success("Seccion Cerrada con Exito");
    signOut();
    queryClient.clear;
    setIsloading(false);
  };

  if (isLoading) return <ActivityIndicator />;

  return (
    <BackgroundTheme>
      <View style={styles.container}>
        <Text>Sesión iniciada como:</Text>
        <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
          {user?.user_metadata.name}
        </Text>
        <View style={{ backgroundColor: "transparent" }}>
          <TouchableOpacity style={styles.ButonOpacity} onPress={LogOut}>
            <Text> Cerrar Session</Text>
          </TouchableOpacity>
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
