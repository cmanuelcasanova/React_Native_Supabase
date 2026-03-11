import { useCreateTask } from "@/src/hooks/useTask";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Toast } from "toastify-react-native";

type Add = {
  task: string;
};

export default function AddTask() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Add>({
    defaultValues: {
      task: "",
    },
  });

  const { mutate, isPending } = useCreateTask();

  const onSubmit: SubmitHandler<Add> = async (dataForm) => {
    mutate(dataForm.task, {
      onSuccess: () => {
        Toast.success("Success message!");
        reset({ task: "" });
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

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </Pressable>
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
