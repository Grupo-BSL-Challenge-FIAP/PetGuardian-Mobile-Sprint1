import { View } from "react-native";
import InputForm from "../InputForm";
import { SafeAreaView } from "react-native-safe-area-context";
import ContainerTitleSubTitle from "../ContainerTitleSubTitle";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../../styles/styles";

export default function FormResponsible() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleBirthDateChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    cleaned = cleaned.slice(0, 8);

    if (cleaned.length > 4) {
      cleaned = cleaned.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (cleaned.length > 2) {
      cleaned = cleaned.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setBirthDate(cleaned);
  };

  const handleCpfChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    cleaned = cleaned.slice(0, 11);

    if (cleaned.length > 9) {
      cleaned = cleaned.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
        "$1.$2.$3-$4",
      );
    } else if (cleaned.length > 6) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (cleaned.length > 3) {
      cleaned = cleaned.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }

    setCpf(cleaned);
  };

  const handlePhoneChange = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    cleaned = cleaned.slice(0, 11);

    if (cleaned.length > 6) {
      cleaned = cleaned.replace(
        /(\d{2})(\d{5})(\d{1,4})/,
        "($1) $2-$3",
      );
    } else if (cleaned.length > 2) {
      cleaned = cleaned.replace(/(\d{2})(\d{1,5})/, "($1) $2");
    }
    setPhone(cleaned);
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 30,
        paddingTop: 30,
      }}
    >
      <ContainerTitleSubTitle
        alignItems="center"
        textTitle={`Insira seus dados\npara continuar:`}
        textSubTitle="Campos marcados com * são obrigatórios."
      />

      <View
        style={{
          paddingHorizontal: 23,
          gap: 30,
        }}
      >
        <InputForm
          label="Nome completo *"
          placeholder="Digite seu nome completo"
          value={name}
          onChangeText={setName}
        />

        <InputForm
          label="Data de nascimento *"
          placeholder="dd/mm/aaaa"
          value={birthDate}
          onChangeText={handleBirthDateChange}
          icon={
            <FontAwesome
              name="calendar-o"
              size={24}
              color={COLORS.orange[900]}
            />
          }
        />

        <InputForm
          label="CPF *"
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={handleCpfChange}
        />

        <InputForm
          label="Telefone *"
          placeholder="(11) 12345-6789"
          keyboardType="number-pad"
          value={phone}
          onChangeText={handlePhoneChange}
        />

        <InputForm
          label="Crie uma senha *"
          placeholder="Crie sua senha"
          value={password}
          onChangeText={setPassword}
        />

        <InputForm
          label="Confirme sua senha *"
          placeholder="Repita a senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
    </View>
  );
}
