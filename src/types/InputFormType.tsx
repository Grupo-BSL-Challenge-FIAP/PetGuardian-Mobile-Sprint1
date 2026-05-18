import { TextInputProps } from "react-native";

export interface InputFormType extends TextInputProps {
    placeholder: string;
    label: string;
}