import TaskContainer from "@/components/TaskContainer";
import { StyleSheet } from "react-native";

export default function index() {
  return <TaskContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
