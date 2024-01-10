import { Button, StyleSheet, Text, View } from "react-native";
import { Generator } from "../functions/generator";
import React from "react";

const GeneratorButton: React.FC = () => {
    return (
        <View>
            <Button onPress={Generator} title="Generar"/>
        </View>
    )
}


export default GeneratorButton;