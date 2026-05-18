import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginCadastroScreen from "../screens/HomeLoginCadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PetRegisterScreen from "../screens/PetRegisterScreen";

export type RootStackParamList = {
  HomeLoginCadastroScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  PetRegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='HomeLoginCadastroScreen'
      >
        <Stack.Screen 
            name="HomeLoginCadastroScreen"
            component={HomeLoginCadastroScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="LoginScreen"
            component={LoginScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="RegisterScreen"
            component={RegisterScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="PetRegisterScreen"
            component={PetRegisterScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />
      </Stack.Navigator>
  );
}