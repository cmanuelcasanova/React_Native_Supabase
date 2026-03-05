import { Text, TextInput, useThemeColor, View } from "@/components/Themed";
import { supabase } from "@/src/lib/supabase";
import { useAuthStore } from "@/src/store/useAuthStore";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const [isloading, setIsloading] = useState<boolean>(false);
  const router = useRouter();
  const TextoTheme = useThemeColor({}, "tabIconDefault");
  const setUser = useAuthStore((store) => store.setUser);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (dataForm) => {
    setIsloading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: dataForm.email,
      password: dataForm.password,
    });

    Keyboard.dismiss();
    setIsloading(false);
    if (data) {
      router.replace("/(tabs)");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {isloading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text> Login </Text>

            <KeyboardAwareScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              enableOnAndroid={true}
              extraScrollHeight={20} // Margen extra sobre el input
            >
              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={{ marginVertical: 20, width: 255 }}
                    placeholder="Ingrese Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}

              <View
                style={{
                  borderWidth: 1,
                  borderColor: TextoTheme,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                  borderRadius: 10,
                }}
              >
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={{ borderColor: "transparent" }}
                      secureTextEntry={viewPassword}
                      placeholder="Ingrese Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />

                <Pressable
                  style={{ padding: 10 }}
                  onPressIn={() => setViewPassword(false)}
                  onPressOut={() => setViewPassword(true)}
                >
                  <FontAwesome5 name="eye" size={24} color={TextoTheme} />
                </Pressable>
              </View>
              {errors.password && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}

              <TouchableOpacity
                style={styles.ButonOpacity}
                onPress={handleSubmit(onSubmit)}
              >
                <Text> Aceptar</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    backgroundColor: "00000000",
  },
  textInput: {},

  ButonOpacity: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 7,
    textAlign: "center",
    width: 90,
    marginHorizontal: "auto",
    justifyContent: "center",
    height: 40,
  },

  PasswordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
