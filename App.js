import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './Screens/Home';

export default function App() {
  return (
    
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:15,
    
  },
});
