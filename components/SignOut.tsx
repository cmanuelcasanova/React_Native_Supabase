import { Text, View } from "@/components/Themed";
import { supabase } from "@/src/lib/supabase";
import { useAuthStore } from "@/src/store/useAuthStore";
import { StyleSheet, TouchableOpacity } from "react-native";

const LogOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error fetching instruments:", error.message);
    return;
  }
};

export default function SignOut() {
  const user = useAuthStore((store) => store.user);

  return (
    <View style={styles.container}>
      <Text>Sesión iniciada como:</Text>
      <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
        {user?.user_metadata.name}
      </Text>
      <View>
        <TouchableOpacity style={styles.ButonOpacity} onPress={LogOut}>
          <Text> Cerrar Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
