import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import { COLORS, FONTS } from "../../styles/styles";
import TitleOrange from "../../components/TitleOrange";

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
            <Text
              style={{
                color: COLORS.orange[700],
                fontFamily: FONTS.poppins[700],
                fontSize: 20,
              }}
            >
              Porque cada pet merece cuidado, proteção e carinho todos os dias.
            </Text>
        </View>
    </LayoutWrapper>
  );
}