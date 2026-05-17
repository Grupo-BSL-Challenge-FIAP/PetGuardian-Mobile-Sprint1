import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginCadastro from "../screens/HomeLoginCadastro";

export type RootStackParamList = {
  HomeLoginCadastro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='HomeLoginCadastro'
      >
        <Stack.Screen 
            name="HomeLoginCadastro"
            component={HomeLoginCadastro}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />
      </Stack.Navigator>
  );
}