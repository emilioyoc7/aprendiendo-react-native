import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./foto.avif')} // Reemplaza 'tu_imagen.jpg' con la ruta de tu imagen
        style={styles.imagen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 200, // Ancho de la imagen
    height: 200, // Altura de la imagen
    resizeMode: 'cover', // Modo de ajuste de la imagen (puedes cambiarlo según tus necesidades)
  },
});

export default App;