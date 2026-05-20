import { View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerImage from "../../components/ContainerImage";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";
import { BACKGROUND, COLORS, FONTS } from "../../styles/styles";
import ContainerForm from "../../components/ContainerForm";
import InputForm from "../../components/InputForm";
import ButtonFormLink from "../../components/ButtonFormLink";
import { Feather } from "@expo/vector-icons";

export default function ResetPasswordScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true} justifyContent="center">
      <ContainerImage imagePath={require("../../assets/resetPassword.png")} />

      <ContainerTitleSubTitle
        textTitle="Digite sua nova senha"
        textSubTitle={`Dica: guarde sua nova senha\ncom cuidado.`}
        fontFamilySubTitle={FONTS.poppins[600]}
        marginTop={20}
        marginBottom={20}
      />

      <ContainerForm>
        <InputForm label="Nova senha:" placeholder="Crie uma nova senha" />
        <InputForm
          label="Confirme sua senha:"
          placeholder="Repita a nova senha"
        />

        <ButtonFormLink
          onPress={() => {}}
          backgroundColor={COLORS.orange[900]}
          colorText={COLORS.white[100]}
          borderWidth={2}
          paddingVertical={8}
          iconRight={
            <Feather name="refresh-ccw" size={32} color={COLORS.white[100]} />
          }
        >
          Redefinir senha
        </ButtonFormLink>
      </ContainerForm>
    </LayoutWrapper>
  );
}