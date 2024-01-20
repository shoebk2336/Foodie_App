import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './Screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:"#f1faee"}}>
    <View  style={styles.container}>
    <Home/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginHorizontal:15,
    
  },
});
