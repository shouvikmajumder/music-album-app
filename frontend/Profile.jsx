import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  ProfileHeader,
  StatsSection,
  ActionButtons,
  RecentActivity,
} from './ProfileComponents';

const Profile = () => {
  const handleEditProfile = () => {
    // Handle edit profile action
    console.log('Edit profile pressed');
  };

  const handleSettings = () => {
    // Handle settings action
    console.log('Settings pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <StatsSection />
      <ActionButtons 
        onEditProfile={handleEditProfile}
        onSettings={handleSettings}
      />
      <RecentActivity />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D1B69',
    padding: 12,
    paddingTop: 14,
  },
});

export default Profile;