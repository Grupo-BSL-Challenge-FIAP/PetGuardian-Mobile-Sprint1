import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import ButtonBack from "../../components/ButtonBack";
import { COLORS, FONTS } from "../../styles/styles";
import FormResponsible from "../../components/FormResponsible";

export default function ResponsibleRegisterScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonBack sizeIcon={35} colorIcon="black" textTrue={true} />
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONTS.poppins[400],
            color: COLORS.orange[900]
          }}
        >
          Passo 1 de 3
        </Text>
      </View>
      <FormResponsible />
    </LayoutWrapper>
  );
}