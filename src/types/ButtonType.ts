export interface ButtonType {
    onPress: () => void;
    backgroundColor?: string;
    paddingVertical?: number;
    alignItems?: "center" | "flex-start" | "flex-end";
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    children: React.ReactNode;
    colorText?: string;
    fontSizeText?: number;
}