import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AlbumCard from "../components/AlbumCard";
import albumData from '../temp.json';

const Homepage = () => {
    const renderItem = ({ item }) => (
        <AlbumCard 
            key={item.id}
            coverImage={item.coverImage}
            title={item.title}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    <Ionicons name="musical-notes" size={32} color="#ffffff" style={styles.musicIcon} /> Soundbox
                </Text>
            </View>
            <FlatList
                data={albumData.albums}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D1B69', // Dark purple background
    },
    header: {
        padding: 5,
        paddingTop: 0,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#4A2B8C', // Lighter purple border
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    musicIcon: {
        marginRight: 8,
    },
    listContainer: {
        padding: 5,
        flexGrow: 1,
    },
    columnWrapper: {
        justifyContent: 'center',
        gap: 8,
    }
});

export default Homepage;