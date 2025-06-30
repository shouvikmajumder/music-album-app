import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileHeader = ({ username = 'Shomo', bio = 'Retarded', initials = 'SM' }) => {
  return (
    <View style={styles.header}>
      <View style={styles.profileImage}>
        <Text style={styles.profileInitials}>{initials}</Text>
      </View>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: '#303f9f',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileInitials: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#b3e5fc',
    textAlign: 'center',
  },
});

export default ProfileHeader; 