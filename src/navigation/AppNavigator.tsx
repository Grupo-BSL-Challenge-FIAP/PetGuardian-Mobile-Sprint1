import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginCadastroScreen from "../screens/HomeLoginCadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import PetRegisterScreen from "../screens/PetRegisterScreen";
import ResponsibleRegisterScreen from "../screens/ResponsibleRegisterScreen";
import AccountCreationConfirmationScreen from "../screens/AccountCreationConfirmationScreen";
import DashboardResponsibleScreen from "../screens/DashboardResponsibleScreen";
import AuthenticationCodeScreen from "../screens/AuthenticationCodeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

export type RootStackParamList = {
  HomeLoginCadastroScreen: undefined;
  LoginScreen: undefined;
  ResponsibleRegisterScreen: undefined;
  PetRegisterScreen: undefined;
  AccountCreationConfirmationScreen: undefined;
  DashboardResponsibleScreen: undefined;
  AuthenticationCodeScreen: undefined;
  ForgotPasswordScreen: undefined;
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
            name="ResponsibleRegisterScreen"
            component={ResponsibleRegisterScreen}
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

        <Stack.Screen 
            name="AccountCreationConfirmationScreen"
            component={AccountCreationConfirmationScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="DashboardResponsibleScreen"
            component={DashboardResponsibleScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="AuthenticationCodeScreen"
            component={AuthenticationCodeScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />

        <Stack.Screen 
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
            options={({ navigation }) => ({
              headerShown: false
            })}    
        />
      </Stack.Navigator>
  );
}