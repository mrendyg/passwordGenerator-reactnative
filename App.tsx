import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MainPage } from './pages/mainpage';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Generador de contraseñas</Text>
      </View>
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
