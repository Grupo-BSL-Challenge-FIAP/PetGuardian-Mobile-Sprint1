import LayoutWrapper from "../../components/LayoutWrapper";
import HeaderForm from "../../components/HeaderForm";

export default function PetRegisterScreen() {
  return (
    <LayoutWrapper isDogPawBottomTop={true}>
      <HeaderForm initialStep={2} />
    </LayoutWrapper>
  );
}