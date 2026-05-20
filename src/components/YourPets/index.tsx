import { Image, TouchableOpacity, View } from "react-native";
import TitleOrange from "../TitleOrange";
import TextLink from "../TextLink";
import { COLORS, FONTS } from "../../styles/styles";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PetType } from "../../types/PetType";

export default function YourPets() {
  const [pets, setPets] = useState<PetType[]>([]);
  const [petActive, setPetActive] = useState<number | null>(null);

  useEffect(() => {
    const loadPets = async () => {
      const petsStorage = await AsyncStorage.getItem("@petguardian:petsData");
      const activePetStorage = await AsyncStorage.getItem(
        "@petguardian:activePetId",
      );

      const parsedPets = petsStorage ? JSON.parse(petsStorage) : [];

      setPets(parsedPets);

      if (activePetStorage) {
        setPetActive(Number(activePetStorage));
      } else if (parsedPets.length > 0) {
        setPetActive(parsedPets[0].id);
        await AsyncStorage.setItem(
          "@petguardian:activePetId",
          String(parsedPets[0].id),
        );
      }
    };

    loadPets();
  }, []);

  const handleActivePet = async (id: number) => {
    setPetActive(id);

    await AsyncStorage.setItem("@petguardian:activePetId", String(id));
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleOrange
          title="Seus pets"
          fontSize={25}
          fontFamily={FONTS.inter[700]}
        />

        <TextLink
          route="ResponsibleRegisterScreen"
          textLink="Ver todos"
          fontFamily={FONTS.inter[500]}
          iconRight={
            <Entypo
              name="chevron-small-right"
              size={23}
              color={COLORS.orange[900]}
            />
          }
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 25,
          marginTop: 5,
          marginBottom: 15,
        }}
      >
        {pets.map((pet) => (
          <TouchableOpacity
            key={pet.id}
            onPress={() => handleActivePet(pet.id)}
          >
            <Image
              source={require("../../assets/dogPaws.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: petActive === pet.id ? 3 : 0,
                borderColor: COLORS.orange[900],
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
