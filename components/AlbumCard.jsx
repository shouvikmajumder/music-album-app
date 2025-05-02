import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const AlbumCard = ({ coverImage, title }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: coverImage }} 
        style={styles.coverImage}
      />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 180,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000000',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  coverImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
  }
});

export default AlbumCard; 