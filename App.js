import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import OrderDetails from "./src/screens/OrderDetail";

export default function App() {
  return (
    <ImageBackground source={require('./assets/Home/Homebackground.png')}
    style={styles.backgroundImage}>
      <View style={styles.container}>
        <OrderDetails/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    margin: 11,
    top: 50,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
