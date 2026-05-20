import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerImage from "../../components/ContainerImage";

export default function LoginScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <ContainerImage imagePath={require("../../assets/petGuardianLogo.png")} marginTop={73} />
    </LayoutWrapper>
  );
}