import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import { COLORS, FONTS } from "../../styles/styles";

export default function HomeLoginCadastroScreen() {
  return (
    <LayoutWrapper paddingHorizontal={30}>
        <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
            <Text
              style={{
                color: COLORS.orange[900],
                fontFamily: FONTS.poppins[700],
                fontSize: 32,
              }}
            >
              Boas vindas ao {"\n"}
              Pet Guardian!
            </Text>
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