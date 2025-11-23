import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NameScreen from './src/screens/auth/NameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsernameScreen from './src/screens/auth/UsernameScreen';
import HomeScreen from './src/screens/main/HomeScreen';
import RoomScreen from './src/screens/main/RoomScreen';

export type RootStackParamList = {
  NameScreen: undefined;
  UsernameScreen: undefined;
  HomeScreen: undefined;
  RoomScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="NameScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="UsernameScreen" component={UsernameScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RoomScreen" component={RoomScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
