import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BACKGROUND } from "../../styles/styles";

export interface LayoutWrapperProps {
    children: React.ReactNode;
    paddingHorizontal?: number;
    paddingBottom?: number;
}

export default function LayoutWrapper({ children, paddingHorizontal, paddingBottom }: LayoutWrapperProps) {
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