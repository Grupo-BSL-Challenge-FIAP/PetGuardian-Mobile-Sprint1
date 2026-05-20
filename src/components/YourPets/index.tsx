import { View } from "react-native";
import TitleOrange from "../TitleOrange";
import TextLink from "../TextLink";
import { COLORS, FONTS } from "../../styles/styles";
import Entypo from "@expo/vector-icons/Entypo";

export default function YourPets() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleOrange title="Seus pets" fontSize={25} fontFamily={FONTS.inter[700]} />
        <TextLink
          route="ResponsibleRegisterScreen"
          textLink="Ver todos"
          fontFamily={FONTS.inter[500]}
          iconRight={
            <Entypo name="chevron-small-right" size={23} color={COLORS.orange[900]} />
          }
        />
      </View>
    </View>
  );
}
