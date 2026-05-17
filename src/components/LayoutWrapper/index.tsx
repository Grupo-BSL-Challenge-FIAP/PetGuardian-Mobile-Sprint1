import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BACKGROUND } from "../../styles/styles";

export interface LayoutWrapperProps {
    children: React.ReactNode;
    paddingHorizontal?: number;
}

export default function LayoutWrapper({ children, paddingHorizontal }: LayoutWrapperProps) {
  return (
    <>
    <SafeAreaView 
        style={{
            flex: 1,
            backgroundColor: BACKGROUND.backgroundMain,
            paddingHorizontal: paddingHorizontal || 15,
        }}
    >
        <ScrollView
            contentContainerStyle={{
                flex: 1,
            }}
        >
            {children}
        </ScrollView>
    </SafeAreaView>
    </>
  );
}