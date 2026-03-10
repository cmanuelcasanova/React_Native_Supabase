import { useDeleteTask } from "@/src/hooks/useTask";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Toast } from "toastify-react-native";

interface cardProp {
  title: string;
  id: number;
}

export default function Card({ title, id }: cardProp) {
  const { mutate, isPending } = useDeleteTask();
  const deleteTask = async (idTask: number) => {
    mutate(idTask, {
      onSuccess: () => {
        Toast.success("Tarea Borrada!");
      },
    });
  };

  return (
    <View className=" flex flex-row bg-gray-400 rounded-md h-14 w-[90%] px-4 items-center justify-center">
      <Text className="text-white text-xl"> {title} </Text>

      <View className=" ml-auto flex flex-row item-center justify-center gap-2">
        <Pressable>
          <AntDesign name="edit" size={30} color="green" />
        </Pressable>
        <Pressable className="ml-2">
          <Feather
            name="trash-2"
            size={30}
            color="red"
            onPress={() => deleteTask(id)}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
