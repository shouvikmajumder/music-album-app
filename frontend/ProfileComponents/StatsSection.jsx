import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsSection = ({ albums = 35, followers = 100, following = 352 }) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{albums}</Text>
        <Text style={styles.statLabel}>Albums</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{followers}</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{following}</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#303f9f',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 14,
    color: '#b3e5fc',
    marginTop: 4,
  },
});

export default StatsSection; 