import { Button, StyleSheet, Text, View } from "react-native";
import { Generator } from "../functions/generator";
import React from "react";

const GeneratorButton: React.FC = () => {
    return (
        <View style={style.botonGenerador}>
            <Button onPress={Generator} title="Generar" color={'#06A3EC'} />
        </View>
    )
}

const style = StyleSheet.create({
    botonGenerador: {
        width: 200,
        height: 50,
        margin: 20,
    }
})

export default GeneratorButton;