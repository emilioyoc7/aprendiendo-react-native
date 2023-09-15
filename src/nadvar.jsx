import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';


const Navbar = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    onTabChange(tabName); 
};

return (
    <View style={styles.container}>
        <ScrollView horizontal>
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
            <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.activeTab]}
            onPress={() => handleTabPress('info')}
            >
            <Text style={styles.tabText}>info</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        ...Platform.select({
            ios: {
                backgroundColor:'red'
            },
            android: {
                backgroundColor:'green'
            }
        }),
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
