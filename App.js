import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SimpleText = () => {
  return (
    <Text style={styles.text} numberOfLines={2} onPress={() => alert('Hello')}>
      Esto es un ejemplo de texto en react native
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop:150,
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Arial',
  },
});

export default SimpleText;