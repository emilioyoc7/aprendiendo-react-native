import React from 'react';
import {Text, ImageBackground, StyleSheet } from 'react-native';

const App = () => (
  <ImageBackground
    source={require('./foto.avif')}
    style={styles.background}
    resizeMode="cover"
  >
    <Text style={styles.text}>Hola mundo!</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;