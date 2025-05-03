import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="⨀ Search for albums..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
    padding: 12,
    paddingTop: 14,
  },
  searchInput: {
    backgroundColor: '#000000',
    height: 38,
    borderRadius: 6,
    paddingHorizontal: 12,
    color: '#ffffff',
    fontSize: 15,
    borderWidth: 0,
  },
});

export default Search;