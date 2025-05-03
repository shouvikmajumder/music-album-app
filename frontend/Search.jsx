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
    backgroundColor: '#2D1B69',
    padding: 12,
    paddingTop: 14,
  },
  searchContainer: {
    marginTop: 26,
  },
  searchInput: {
    backgroundColor: '#1A1033',
    height: 38,
    borderRadius: 12,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchResults: {
    marginTop: 20,
    backgroundColor: '#1A1033',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default Search;