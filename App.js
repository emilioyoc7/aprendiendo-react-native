import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function CustomButton() {
  return (
    <Pressable
      onPress={() => console.log('Pressed!')}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressedButton : styles.normalButton,
      ]}
    >
      <Text style={styles.buttonText}>Presiona</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    
  },
  normalButton: {
    backgroundColor: 'blue',
    marginTop:100
  },
  pressedButton: {
    backgroundColor: 'red',
    marginTop:100
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});