import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerImage from "../../components/ContainerImage";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";
import { FONTS } from "../../styles/styles";

export default function LoginScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <ContainerImage imagePath={require("../../assets/petGuardianLogo.png")} marginTop={73} />

      <ContainerTitleSubTitle 
        textTitle={`Que bom ver\nvocê novamente!`}
        textSubTitle="Insira seus dados para continuar."
        fontFamilySubTitle={FONTS.poppins[700]}
      />
    </LayoutWrapper>
  );
}