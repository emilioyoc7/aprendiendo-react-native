import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Navbar from './src/nadvar.jsx';
import Inicio from './src/inicio.jsx';
import MySectionList from './src/about.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home'); 
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  
  const renderContent = () => {
    if (activeTab === 'Home') {
      return (
        <View>
          <Inicio />
        </View>
      );
    } else if (activeTab === 'About') {
      return (
        <View>
          <MySectionList />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Navbar onTabChange={handleTabChange}/>
      {renderContent()}
    </SafeAreaView>
  );
};

export default App;
