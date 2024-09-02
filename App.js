import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainAppbar from "./components/MainAppbar";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ header: (props) => <MainAppbar {...props} /> }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerTitle: "Home" }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ title: "Second", headerTitle: "Second" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
