import { Text } from "react-native";
import { COLORS, FONTS } from "../../styles/styles";
import { TitleOrangeType } from "../../types/TitleBrownType";

export default function TitleOrange({ title, fontSize }: TitleOrangeType) {
  return (
    <Text
      style={{
        color: COLORS.orange[900],
        fontFamily: FONTS.poppins[700],
        fontSize: fontSize || 32,
      }}
    >
      {title}
    </Text>
  );
}
