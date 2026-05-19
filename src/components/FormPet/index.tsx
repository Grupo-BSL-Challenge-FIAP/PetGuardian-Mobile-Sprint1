import { View } from "react-native";
import ContainerTitleSubTitle from "../ContainerTitleSubTitle";

export default function FormPet() {
  return (
    <View
      style={{
        flex: 1,
        gap: 30,
        paddingTop: 30,
      }}
    >
      <ContainerTitleSubTitle
        textTitle="Agora insira os dados do seu pet:"
        textSubTitle="Campos marcados com * são obrigatórios."
      />
    </View>
  );
}
