import { Pressable, Text } from "react-native";
import { COLORS } from "../../styles/styles";
import { ButtonType } from "../../types/ButtonType";

export default function Button({
  onPress,
  backgroundColor,
  paddingVertical,
  alignItems,
  borderRadius,
  borderWidth,
  borderColor,
  children,
  colorText,
  fontSizeText,
}: ButtonType) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor || COLORS.orange[900],
        paddingVertical: paddingVertical || 11,
        alignItems: alignItems || "center",
        borderRadius: borderRadius || 15,
        borderWidth: borderWidth || 3,
        borderColor: borderColor || COLORS.orange[900],
      }}
    >
      <Text
        style={{
            color: colorText || COLORS.white[300],
            fontSize: fontSizeText || 16,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
