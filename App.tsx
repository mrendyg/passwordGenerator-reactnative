import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainPage } from './pages/mainpage';

export default function App() {
  return (
    <View style={styles.pricipalPage}>
      <View  style={styles.titulo}>
        <Text style={styles.tituloText}>Generador de contraseñas</Text>
      </View>
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  pricipalPage: {
    top: 80
  },

  titulo: {
    alignItems: "center",
    justifyContent: "center",
  },

  tituloText: {
    fontSize: 25
  }

});
