import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
                 Soundbox
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        paddingVertical: 15,
        paddingTop: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    musicIcon: {
        marginRight: 8,
    }
});

export default Logo; 