import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyApp from './src/navigation/MyApp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <MyApp/>
  );
}
