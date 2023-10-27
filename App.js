import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/MyApp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { HomeScreen } from './src/navigation/screens/HomeScreen';
//import DetailsScreen from './src/navigation/screens/DetailsScreen';
//import SettingsScreen from "./src/navigation/screens/SettingsScreen"

//const HomeStack = createNativeStackNavigator();

//function HomeStackScreen() {
//  return (
//    <HomeStack.Navigator>
//      <HomeStack.Screen name="Home" component={HomeScreen} />
//      <HomeStack.Screen name="Details" component={DetailsScreen} />
//    </HomeStack.Navigator>
//  );
//}

//const SettingsStack = createNativeStackNavigator();

//function SettingsStackScreen() {
//  return (
//    <SettingsStack.Navigator>
//      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//      <SettingsStack.Screen name="Details" component={DetailsScreen} />
//    </SettingsStack.Navigator>
//  );
//}

//const Tab = createBottomTabNavigator();

//export default function App() {
//  return (
//    <NavigationContainer>
//      <Tab.Navigator screenOptions={{ headerShown: false }}>
//        <Tab.Screen name="Home" component={HomeStackScreen} />
//        <Tab.Screen name="Settings" component={SettingsStackScreen} />
//      </Tab.Navigator>
//    </NavigationContainer>
//  );
//}