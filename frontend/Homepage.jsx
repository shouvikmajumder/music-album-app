import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
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
                <Text style={styles.headerTitle}>Soundbox</Text>
            </View>
            <FlatList
                data={albumData.albums}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a237e', // Matching the dark blue theme
    },
    header: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#303f9f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    listContainer: {
        padding: 10,
    }
});

export default Homepage;