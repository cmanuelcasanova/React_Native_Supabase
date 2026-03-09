import { Products } from "@/src/api/typeSupabase";
import { useTask } from "@/src/hooks/useTask";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useCallback } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTask from "./AddTask";
import BackgroundTheme from "./BackgroundTheme";
import Card from "./Card";
import { Text, View } from "./Themed";

export default function TaskContainer() {
  const user = useAuthStore((store) => store.user);
  const { data: Products, refetch, isFetching, isPending } = useTask();
  const Cardhandle = useCallback(
    ({ item }: { item: Products }) => <Card title={item.Title} id={item.id} />,
    [],
  );

  if (isPending) return <ActivityIndicator />;

  return (
    <BackgroundTheme>
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Home Page</Text>

          <AddTask />
          <FlatList<Products>
            contentContainerClassName="items-center flex-grow w-full py-4"
            data={[...(Products || [])]}
            onRefresh={refetch}
            refreshing={isFetching}
            className="flex-1 w-full"
            ItemSeparatorComponent={() => <View className="h-4" />}
            renderItem={Cardhandle}
            keyExtractor={(item) => item.id.toString()}
            extraData={[isFetching, isPending, Products?.length]}
          />
        </View>
      </SafeAreaView>
    </BackgroundTheme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.98,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    width: "90%",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});
