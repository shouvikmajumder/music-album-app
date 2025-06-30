import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecentActivity = ({ activities = [] }) => {
  const defaultActivities = [
    { text: 'Added "Die Lit" to your collection', time: '2 hours ago' },
    { text: 'Listened to "Rodeo"', time: '5 hours ago' },
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      {displayActivities.map((activity, index) => (
        <View key={index} style={styles.activityItem}>
          <Text style={styles.activityText}>{activity.text}</Text>
          <Text style={styles.activityTime}>{activity.time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  activityItem: {
    backgroundColor: '#000000',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activityTime: {
    color: '#b3e5fc',
    fontSize: 14,
    marginTop: 4,
  },
});

export default RecentActivity; 