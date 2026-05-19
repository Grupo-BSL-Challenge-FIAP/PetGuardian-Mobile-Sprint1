import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";
import { View } from "react-native";

export default function AccountCreationConfirmationScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <View
        style={{
          flex: 1,
          gap: 30,
          paddingTop: 30,
        }}
      >
        <ContainerTitleSubTitle
          textTitle="Tudo certo!"
          textSubTitle="Confira se os dados estão certos:"
        />
      </View>
    </LayoutWrapper>
  );
}