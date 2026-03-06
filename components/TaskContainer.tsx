import { useTask } from "@/src/hooks/useTask";
import { useAuthStore } from "@/src/store/useAuthStore";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTask from "./AddTask";
import BackgroundTheme from "./BackgroundTheme";
import { Text, View } from "./Themed";

export default function TaskContainer() {
  const user = useAuthStore((store) => store.user);
  const { data: Products, refetch, isFetching, isPending } = useTask();

  if (isPending) return <ActivityIndicator />;

  return (
    <BackgroundTheme>
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Home Page</Text>

          <AddTask />
          {Products && Products.length > 0 ? (
            Products.map((item, index) => (
              <Text key={item.id} style={styles.title}>
                {item.Title}
              </Text>
            ))
          ) : (
            <Text> No data </Text>
          )}
        </View>
      </SafeAreaView>
    </BackgroundTheme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});
