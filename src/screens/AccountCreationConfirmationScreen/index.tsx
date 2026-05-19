import LayoutWrapper from "../../components/LayoutWrapper";
import ContainerTitleSubTitle from "../../components/ContainerTitleSubTitle";
import DataConfirmationCard from "../../components/DataConfirmationCard";
import { View } from "react-native";
import HeaderForm from "../../components/HeaderForm";
import ButtonFormLink from "../../components/ButtonFormLink";
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from "../../styles/styles";

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
        <HeaderForm initialStep={3} />
        <ContainerTitleSubTitle
          textTitle="Tudo certo!"
          textSubTitle="Confira se os dados estão certos:"
        />
        <DataConfirmationCard title="Responsável:">
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Nome: "
            textSubTitle="Moisés" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Data de nascimento: "
            textSubTitle="03/07/1805" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="CPF: "
            textSubTitle="123.456.789-00" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Telefone: "
            textSubTitle="(11) 91234-5678" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Endereço: "
            textSubTitle="Rua Exemplo," 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
        </DataConfirmationCard>
        <DataConfirmationCard title="Pet:">
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Nome: "
            textSubTitle="Moisés" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Espécie: "
            textSubTitle="03/07/1805" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Raça: "
            textSubTitle="123.456.789-00" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Sexo: "
            textSubTitle="(11) 91234-5678" 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Nascimento: "
            textSubTitle="Rua Exemplo," 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
          <ContainerTitleSubTitle
            alignItems="center"
            textTitle="Peso: "
            textSubTitle="Rua Exemplo," 
            fontSizeTiTleOrange={18}
            fontSizeSubTitle={18}
            flexDirection="row"
            gap={2}
          />
        </DataConfirmationCard>
        <ButtonFormLink 
            marginHorizontal={20}
            marginTop={20}
            iconLeft={<Feather name="user-plus" size={35} color={COLORS.white[100]} />}
            colorText={COLORS.white[100]}
        >
          Criar conta
        </ButtonFormLink>
      </View>
    </LayoutWrapper>
  );
}