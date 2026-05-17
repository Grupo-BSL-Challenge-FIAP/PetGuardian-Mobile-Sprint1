import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import { COLORS, FONTS } from "../../styles/styles";
import TitleOrange from "../../components/TitleOrange";
import SubTitleOrange from "../../components/SubTitleOrange";

export default function HomeLoginCadastroScreen() {
  return (
    <LayoutWrapper paddingHorizontal={30}>
        <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <TitleOrange title={`Boas vindas ao\nPet Guardian!`} />
          <SubTitleOrange title={`Faça login ou cadastre-se para começar a cuidar do seu pet!`} />
        </View>
    </LayoutWrapper>
  );
}