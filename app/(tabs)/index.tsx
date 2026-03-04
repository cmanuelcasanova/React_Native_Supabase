import { Text, View } from "@/components/Themed";
import { supabase } from "@/src/lib/supabase";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function index() {
  const [datos, setDatos] = useState<string>();
  const user = useAuthStore((store) => store.user);

  useEffect(() => {
    const getTask = async () => {
      const { data, error } = await supabase.from("Task").select("*");

      if (error) {
        console.error("Error fetching instruments:", error.message);
        return;
      }
      console.log("Task:", data);
      if (data.length > 0) {
        setDatos(data[0].Title);
      }
    };

    getTask();
  }, [user]);

  useEffect(() => {
    const GetSeccion = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("No hay seccion", error.message);
        return;
      }
      console.log(data);
    };

    GetSeccion();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      {datos && <Text style={styles.title}>{datos}</Text>}
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
