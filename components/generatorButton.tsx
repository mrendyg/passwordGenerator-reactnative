import { Button, StyleSheet, Text, View } from "react-native";
import { GeneratorApp } from "../functions/generator";
import React from "react";

const GeneratorButton: React.FC = () => {
    return (
        <View style={styles.botonGenerador}>
            <GeneratorApp />
        </View>
    )
}

const styles = StyleSheet.create({
    botonGenerador: {
        width: 200,
        height: 50,
        margin: 20,
    }
})

export default GeneratorButton;