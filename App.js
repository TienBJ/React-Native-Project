import HomePage from "./src/components/HomePage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat } from "./src/screens/Chat";
import OrderDetails, { OrderDetail } from "./src/screens/OrderDetail";
import MainContent from "./src/screens/MainPage";

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomePage}>
          <Stack.Screen name="Home" component={HomePage}  options={{headerTitle: ''}}/>
          <Stack.Screen name="Profile" component={MainContent} options={{headerTitle: ''}}/>
          <Stack.Screen name="Cart" component={OrderDetails} options={{headerTitle: ''}} />
          <Stack.Screen name="Chat" component={Chat} options={{headerTitle: ''}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

