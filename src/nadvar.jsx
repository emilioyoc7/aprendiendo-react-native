import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Navbar = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    onTabChange(tabName); 
};

return (
    <View style={styles.container}>
        <TouchableOpacity
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
        onPress={() => handleTabPress('Home')}
        >
        <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.tab, activeTab === 'About' && styles.activeTab]}
        onPress={() => handleTabPress('About')}
        >
        <Text style={styles.tabText}>About</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333',
        height: 60,
    },
    tab: {
    padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    tabText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Navbar;
