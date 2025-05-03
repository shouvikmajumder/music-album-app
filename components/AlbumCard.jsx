import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const AlbumCard = ({ coverImage, title }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={styles.card}
    >
      <Image 
        source={{ uri: coverImage }} 
        style={styles.coverImage}
      />
      {isPressed && (
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
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
    height: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});

export default AlbumCard; 