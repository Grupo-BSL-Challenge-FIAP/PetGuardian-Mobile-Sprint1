import { View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerImage from "../../components/ContainerImage";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";

export default function ForgotPasswordScreen() {
  return (
    <LayoutWrapper
      isDogPawBottomTop={true}
      justifyContent="center"
      alignItems="center"
    >
      <ContainerImage imagePath={require("../../assets/forgotPassword.png")} />

      <ContainerTitleSubTitle 
        textTitle="Esqueceu sua senha?"
        textSubTitle={`Informe seu e-mail para\nredefinir sua senha`}
        marginTop={20}
      />
    </LayoutWrapper>
  );
}