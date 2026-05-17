import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginCadastroScreen from "../screens/HomeLoginCadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

export type RootStackParamList = {
  HomeLoginCadastroScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
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
      </Stack.Navigator>
  );
}