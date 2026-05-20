import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerImage from "../../components/ContainerImage";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";
import { COLORS, FONTS } from "../../styles/styles";
import ContainerForm from "../../components/ContainerForm";
import InputForm from "../../components/InputForm";
import { View } from "react-native";
import TextLink from "../../components/TextLink";
import ButtonFormLink from "../../components/ButtonFormLink";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <ContainerImage
        imagePath={require("../../assets/petGuardianLogo.png")}
        marginTop={73}
      />

      <ContainerTitleSubTitle
        textTitle={`Que bom ver\nvocê novamente!`}
        textSubTitle="Insira seus dados para continuar."
        fontFamilySubTitle={FONTS.poppins[700]}
        marginBottom={33}
      />

      <ContainerForm>
        <InputForm
          label="E-mail: "
          placeholder="Digite seu e-mail"
          marginBottom={30}
        />
        <InputForm
          label="Senha: "
          placeholder="Digite sua senha"
          marginBottom={10}
          secureTextEntry
        />
        <View>
          <TextLink
            route="ResponsibleRegisterScreen"
            textLink="Não tem uma conta? Clique aqui."
          />
          <TextLink
            route="ForgotPasswordScreen"
            textLink="Esqueci minha senha."
          />
        </View>

        <ButtonFormLink
          onPress={() => {}}
          marginTop={32}
          backgroundColor={COLORS.orange[900]}
          colorText={COLORS.white[100]}
          borderWidth={2}
          paddingVertical={8}
          iconRight={
            <MaterialCommunityIcons
              name="login"
              size={35}
              color={COLORS.white[100]}
            />
          }
        >
          Entrar
        </ButtonFormLink>
      </ContainerForm>
    </LayoutWrapper>
  );
}