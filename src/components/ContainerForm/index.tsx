import { View } from "react-native";
import { ContainerFormType } from "../../types/ContainerFormType";

export default function ContainerForm({ children } : ContainerFormType) {
  return (
    <View
      style={{
          paddingHorizontal: 23,
          gap: 30,
      }}
    >
        {children}
    </View>
  );
}