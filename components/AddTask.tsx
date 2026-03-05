import { useCreateTask } from "@/src/hooks/useTask";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, View } from "./Themed";

type Add = {
  task: string;
};

export default function AddTask() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Add>({
    defaultValues: {
      task: "",
    },
  });

  const { mutate, isPending } = useCreateTask();

  const onSubmit: SubmitHandler<Add> = async (dataForm) => {
    console.log(dataForm);
    mutate(dataForm.task, {
      onSuccess: () => {
        alert("¡Tarea guardada!");
      },
    });
  };

  return (
    <View style={styles.AddTask}>
      <Controller
        control={control}
        name="task"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{ marginVertical: 20, width: 255 }}
            placeholder="Agregar Task"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.task && <Text style={{ color: "red" }}>This is required.</Text>}

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "00000000",
  },
  AddTask: {
    backgroundColor: "00000000",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
