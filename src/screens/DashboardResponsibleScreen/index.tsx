import { Text, View } from "react-native";
import LayoutWrapper from "../../components/LayoutWrapper";
import HeaderDashboardResponsible from "../../components/HeaderDashboardResponsible";

export default function DashboardResponsibleScreen() {
  return (
    <LayoutWrapper paddingHorizontal={-1} marginTop={90} isHeaderDashboardResponsible={true}>
        <Text>Dashboard do Responsável</Text>
    </LayoutWrapper>
  );
}