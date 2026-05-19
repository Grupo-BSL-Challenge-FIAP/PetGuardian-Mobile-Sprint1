import { View } from "react-native";
import TitleOrange from "../TitleOrange";
import SubTitleOrange from "../SubTitleOrange";
import { FONTS } from "../../styles/styles";
import { ContainerTitleSubTitleType } from "../../types/ContainerTitleSubTitleType";

export default function ContainerTitleSubTitle({ alignItems, textTitle, textSubTitle, fontSizeTiTleOrange, fontSizeSubTitle, flexDirection, gap }: ContainerTitleSubTitleType) {
  return (
    <View
      style={{
        alignItems: alignItems || "center",
        flexDirection: flexDirection || "column",
        gap: gap,
      }}
    >
      <TitleOrange
        title={textTitle}
        textAlign="center"
        fontSize={fontSizeTiTleOrange}
      />
      <SubTitleOrange
        title={textSubTitle}
        fontFamily={FONTS.poppins[400]}
        fontSize={fontSizeSubTitle}
      />
    </View>
  );
}
