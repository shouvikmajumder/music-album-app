import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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
    listContainer: {
        padding: 10,
    }
});

export default Homepage;