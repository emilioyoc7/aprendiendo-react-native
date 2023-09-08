import React from 'react';
import {TextInput, StyleSheet, KeyboardAvoidingView, Text, SafeAreaView } from 'react-native';

const Inicio = () => {
    return (
    <SafeAreaView>
        <KeyboardAvoidingView
        style={styles.container}
      behavior="padding" // Additional padding when the keyboard is open.
    >
        <TextInput
        placeholder="Type something here"
        style={styles.textInput}
        />
    </KeyboardAvoidingView>
    <Text style={{marginTop:100}}>hola me llamo emilio tengo 18 años, soy de mexico y estoy aprendiendo a programar en react native desde hace una semana</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:100,
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 20,
    },
});

export default Inicio;