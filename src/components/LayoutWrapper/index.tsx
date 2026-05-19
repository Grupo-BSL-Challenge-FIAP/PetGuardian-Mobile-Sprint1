import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BACKGROUND } from "../../styles/styles";
import DogPaws from "../DogPaws";
import DogPawBottomTop from "../DogPawBottomTop";
export interface LayoutWrapperProps {
    children: React.ReactNode;
    paddingHorizontal?: number;
    paddingBottom?: number;
    isDogPaws?: boolean;
    isDogPawBottomTop?: boolean;
}

export default function LayoutWrapper({ children, paddingHorizontal, paddingBottom, isDogPaws= false, isDogPawBottomTop= false }: LayoutWrapperProps) {
  return (
    <>
    <SafeAreaView 
        style={{
            flex: 1,
            backgroundColor: BACKGROUND.backgroundMain,
            paddingHorizontal: paddingHorizontal || 15,
            paddingBottom: paddingBottom || 50,
        }}
    >
        {isDogPaws && <DogPaws />}
        {isDogPawBottomTop && <DogPawBottomTop />}
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            {children}
        </ScrollView>
    </SafeAreaView>
    </>
  );
}