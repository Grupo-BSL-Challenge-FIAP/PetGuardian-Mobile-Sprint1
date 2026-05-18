import { View } from "react-native";
import TitleOrange from "../TitleOrange";
import SubTitleOrange from "../SubTitleOrange";
import { FONTS } from "../../styles/styles";
import { ContainerTitleSubTitleType } from "../../types/ContainerTitleSubTitleType";

export default function ContainerTitleSubTitle({ alignItems, textTitle, textSubTitle }: ContainerTitleSubTitleType) {
  return (
    <View
      style={{
        alignItems: alignItems || "center",
      }}
    >
      <TitleOrange
        title={`Insira seus dados\npara continuar:`}
        textAlign="center"
      />
      <SubTitleOrange
        title="Campos marcados com * são obrigatórios."
        fontFamily={FONTS.poppins[400]}
        fontSize={15}
      />
    </View>
  );
}
