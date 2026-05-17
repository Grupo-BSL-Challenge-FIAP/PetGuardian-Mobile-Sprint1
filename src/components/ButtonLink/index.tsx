import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { ButtonLinkType } from "../../types/ButtonLinkType";

export default function ButtonLink({
  route, paddingVertical, alignItems, borderRadius, backgroundColor, fontFamily, fontSize, colorText, borderWidth, borderColor, children}
  : ButtonLinkType) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
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
          color: colorText || COLORS.orange[100],
          fontFamily: fontFamily || FONTS.poppins[700],
          fontSize: fontSize || 22,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
