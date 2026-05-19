import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BACKGROUND } from "../../styles/styles";
import DogPaws from "../DogPaws";
export interface LayoutWrapperProps {
    children: React.ReactNode;
    paddingHorizontal?: number;
    paddingBottom?: number;
    isDogPaws?: boolean;
}

export default function LayoutWrapper({ children, paddingHorizontal, paddingBottom, isDogPaws= false }: LayoutWrapperProps) {
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