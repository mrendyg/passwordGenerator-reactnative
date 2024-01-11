import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";



export const GeneratorApp: React.FC = () => {
    
    const [displayText, setdisplayText] = useState('');

    const generatePassword = () => {

        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-;:_{}[]´+*'¿?¡";
        let password = '';

        for (let i=0; i<20; i++){
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomIndex);
        }


        setdisplayText(password);

    }   

    return (
        <View>
            <View style={{
                justifyContent: "center",
                alignContent: "center",
                left: 80
            }}>
                <Button onPress={generatePassword} title="Generar" color={'#06A3EC'}/>
            </View>
            <View>
                <Text style={{
                    alignContent: "center",
                    justifyContent: "center",
                    left: 50
                }}>
                    Your password is:
                </Text>
                <Text style={{
                    fontSize: 25,
                    alignContent: "center",
                    justifyContent: "center",
                    width: 300
                }}>
                    {displayText}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonGenerator: {
        color: '#000'
    }
})

