import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        animationType="none"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text>hola, soy un Modal!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>borrar Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>mostrar Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;