import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import HeaderDashboardResponsible from "../../components/HeaderDashboardResponsible";
import YourPets from "../../components/YourPets";
import StatusPet from "../../components/StatusPet";

export default function DashboardResponsibleScreen() {
  return (
    <LayoutWrapper paddingHorizontal={-1} marginTop={90} isHeaderDashboardResponsible={true}>
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 20,
          gap: 30
        }}
      >
        <YourPets />
        <StatusPet />
      </View>
    </LayoutWrapper>
  );
}