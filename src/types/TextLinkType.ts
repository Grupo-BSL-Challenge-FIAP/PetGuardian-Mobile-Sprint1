import { RootStackParamList } from "../navigation/AppNavigator";

export interface TextLinkType {
  route: keyof RootStackParamList;
  textLink: React.ReactNode;
  colorText?: string;
  fontFamily?: string;
  fontSize?: number;
}