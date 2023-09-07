import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Navbar from './src/nadvar.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home'); 
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  
  const renderContent = () => {
    if (activeTab === 'Home') {
      return (
        <View>
          <Text>Contenido de la pestaña Home</Text>
        </View>
      );
    } else if (activeTab === 'About') {
      return (
        <View>
          <Text>Contenido de la pestaña About</Text>
        </View>
      );
    }
  };

  return (
    <View style={{marginTop:45, backgroundColor: 'white'}}>
      <Navbar onTabChange={handleTabChange}/>
      {renderContent()}
    </View>
  );
};

export default App;
