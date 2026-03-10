import React from "react";
import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

interface modalProps {
  closeModal: () => void;
  isVisible: boolean;
}

export default function Modalconfirmation({
  closeModal,
  isVisible,
}: modalProps) {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn="slideInRight"
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        animationOut="slideOutRight"
        animationInTiming={400}
        animationOutTiming={400}
        swipeDirection="right"
        onSwipeComplete={closeModal}
        style={{ margin: 0 }}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
      >
        <View className="flex-1 w-[70%] rounded-l-2xl h-full ml-auto m-0 bg-orange-400 flex items-center justify-center">
          <Text>Susscesfull!!!</Text>
          <Pressable
            className="bg-white p-4 rounded-s-md mt-4"
            onPress={closeModal}
          >
            <Text>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
