import { Text, TextInput, View, useThemeColor } from "@/components/Themed";
import { supabase } from "@/src/lib/supabase";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Inputs = {
  name: string;
  email: string;
  password: string;
  repassword: string;
};

export default function SignUp() {
  const [viewPassword, setViewPassword] = useState<boolean>(true);
  const TextoTheme = useThemeColor({}, "tabIconDefault");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (dataForm) => {
    console.log(dataForm);

    const { data, error } = await supabase.auth.signUp({
      email: dataForm.email,
      password: dataForm.password,
      options: {
        data: {
          name: dataForm.name,
        },
      },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 30 }}> Registro de Usuario </Text>

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === "ios" ? 0 : 20}
          enableAutomaticScroll={true}
          keyboardShouldPersistTaps="handled"
        >
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                placeholder="Nombre de Usuario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}

          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
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
              name="repassword"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{ borderColor: "transparent" }}
                  secureTextEntry={viewPassword}
                  placeholder="Repita Password"
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
          {errors.repassword && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}

          <TouchableOpacity
            style={styles.ButonOpacity}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>Aceptar </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
  },

  textInput: {
    marginBottom: 20,
    width: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  formStyle: {
    marginLeft: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
  },
  ButonOpacity: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 7,
    textAlign: "center",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
  },

  PasswordContainer: {
    borderWidth: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
