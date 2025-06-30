import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActionButtons = ({ onEditProfile, onSettings }) => {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.editButton} onPress={onEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton} onPress={onSettings}>
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  editButton: {
    backgroundColor: '#4A2B8C',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ActionButtons; 