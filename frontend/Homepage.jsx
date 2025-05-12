import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
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

    const renderHorizontalItem = ({ item }) => (
        <View style={styles.horizontalCard}>
            <AlbumCard 
                key={item.id}
                coverImage={item.coverImage}
                title={item.title}
            />
        </View>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                     Soundbox
                </Text>
            </View>
            
            {/* Horizontal Scroll Section */}
            <View style={styles.horizontalSection}>
                <Text style={styles.sectionTitle}>Featured Albums</Text>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollContent}
                >
                    {albumData.albums.map((item) => (
                        <View key={item.id} style={styles.horizontalCard}>
                            <AlbumCard 
                                coverImage={item.coverImage}
                                title={item.title}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.horizontalSection}>
                <Text style={styles.sectionTitle}>Popular Amongst Friends</Text>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollContent}
                >
                    {albumData.albums.map((item) => (
                        <View key={item.id} style={styles.horizontalCard}>
                            <AlbumCard 
                                coverImage={item.coverImage}
                                title={item.title}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Grid View Section */}
            <View style={styles.horizontalSection}>
                <Text style={styles.sectionTitle}>Reccomended For You</Text>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.horizontalScrollContent}
                >
                    {albumData.albums.map((item) => (
                        <View key={item.id} style={styles.horizontalCard}>
                            <AlbumCard 
                                coverImage={item.coverImage}
                                title={item.title}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
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
    horizontalSection: {
        marginVertical: 10,
    },
    horizontalScrollContent: {
        paddingHorizontal: 10,
        gap: 10,
    },
    horizontalCard: {
        marginRight: 10,
        width: 160,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 10,
        marginBottom: 10,
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