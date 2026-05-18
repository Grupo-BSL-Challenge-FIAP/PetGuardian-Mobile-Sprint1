import { View } from "react-native";
import InputForm from "../InputForm";
import ContainerTitleSubTitle from "../ContainerTitleSubTitle";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS, FONTS } from "../../styles/styles";
import ContainerForm from "../ContainerForm";
import ButtonLink from "../ButtonLink";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextLink from "../TextLink";
import ButtonFormLink from "../ButtonFormLink";
import AlertMessageError from "../AlertMessageError";

export default function FormResponsible() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    birthDate: false,
    cpf: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

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
      cleaned = cleaned.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
    } else if (cleaned.length > 2) {
      cleaned = cleaned.replace(/(\d{2})(\d{1,5})/, "($1) $2");
    }
    setPhone(cleaned);
  };

  const validateForm = () => {

    const newErrors = {
      name: false,
      birthDate: false,
      cpf: false,
      phone: false,
      password: false,
      confirmPassword: false,
    };

    if (!name.trim()) {
      newErrors.name = true;

      setErrors(newErrors);
      setMessageError("Preencha o nome completo.");
      return false;
    }

    if (birthDate.length < 10) {
      newErrors.birthDate = true;

      setErrors(newErrors);
      setMessageError("Preencha uma data de nascimento válida.");
      return false;
    }

    if (cpf.length < 14) {
      newErrors.cpf = true;

      setErrors(newErrors);
      setMessageError("Preencha um CPF válido.");
      return false;
    }

    if (phone.length < 15) {
      newErrors.phone = true;


      setErrors(newErrors);
      setMessageError("Preencha um telefone válido.");
      return false;
    }

    if (password.length < 6) {
      newErrors.password = true;

      setErrors(newErrors);
      setMessageError("A senha deve ter no mínimo 6 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = true;
      
      setErrors(newErrors);
      setMessageError("As senhas não conferem.");
      return false;
    }

    return true;
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

      <ContainerForm>
        <InputForm
          label="Nome completo *"
          placeholder="Digite seu nome completo"
          value={name}
          onChangeText={setName}
          error={errors.name}
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
          error={errors.birthDate}
        />

        <InputForm
          label="CPF *"
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={handleCpfChange}
          error={errors.cpf}
        />

        <InputForm
          label="Telefone *"
          placeholder="(11) 12345-6789"
          keyboardType="number-pad"
          value={phone}
          onChangeText={handlePhoneChange}
          error={errors.phone}
        />

        <InputForm
          label="Crie uma senha *"
          placeholder="Crie sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          error={errors.password}
        />

        <InputForm
          label="Confirme sua senha *"
          placeholder="Repita a senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          marginBottom={10}
          secureTextEntry
          error={errors.confirmPassword}
        />

        <TextLink
          route={"LoginScreen"}
          textLink="Já tem uma conta? Clique aqui."
        />

        {messageError.length > 0 && (
          <AlertMessageError message={messageError} />
        )}

        <View
          style={{
            marginTop: 50,
          }}
        >
          <ButtonFormLink
            route={"PetRegisterScreen"}
            functionValidationError={validateForm}
            backgroundColor={COLORS.orange[900]}
            colorText={COLORS.white[300]}
            fontFamily={FONTS.poppins[700]}
            paddingVertical={7}
            iconRight={
              <AntDesign
                name="arrow-right"
                size={26}
                color={COLORS.white[300]}
              />
            }
          >
            Continuar
          </ButtonFormLink>
        </View>
      </ContainerForm>
    </View>
  );
}
