import AddTask from "@/components/AddTask";
import BackgroundTheme from "@/components/BackgroundTheme";
import { Text, View } from "@/components/Themed";
import { useTask } from "@/src/hooks/useTask";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default function index() {
  const [datos, setDatos] = useState<string>();
  const user = useAuthStore((store) => store.user);
  const { data: Products, refetch, isFetching, isLoading } = useTask();

  useEffect(() => {
    if (Products) {
      setDatos(Products[0].Title);
    }
  }, [Products]);

  /*
  useEffect(() => {
    const GetSeccion = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("No hay seccion", error.message);
        return;
      }
    };

    GetSeccion();
  }, []);*/

  console.log("--- RENDER ---");
  console.log("isLoading:", isLoading);
  console.log("isFetching:", isFetching);
  console.log("Cantidad de productos:", Products?.length);

  if (isLoading) return <ActivityIndicator />;
  if (Products && Products.length > 0)
    return (
      <BackgroundTheme>
        <View style={styles.container}>
          <Text style={styles.title}>Home Page</Text>

          {Products.map((item, index) => (
            <Text key={index} style={styles.title}>
              {item.Title}
            </Text>
          ))}

          <AddTask />
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
