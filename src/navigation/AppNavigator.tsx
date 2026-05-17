import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLoginCadastroScreen from "../screens/HomeLoginCadastroScreen";

export type RootStackParamList = {
  HomeLoginCadastroScreen: undefined;
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
      </Stack.Navigator>
  );
}