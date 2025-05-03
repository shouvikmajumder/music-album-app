import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Animated, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Homepage from './frontend/Homepage';
import Profile from './frontend/Profile';
import Search from './frontend/Search';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [selectedTab]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'home':
        return (
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <Homepage />
          </Animated.View>
        );
      case 'search':
        return (
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <Search />
          </Animated.View>
        );
      case 'profile':
        return (
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <Profile />
          </Animated.View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {renderContent()}
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'home' && styles.selectedTab]}
            onPress={() => setSelectedTab('home')}
          >
            <Ionicons 
              name={selectedTab === 'home' ? 'home' : 'home-outline'} 
              size={26} 
              color={selectedTab === 'home' ? '#ffffff' : '#ffffff'} 
            />
            <Text style={[styles.tabText, selectedTab === 'home' && styles.selectedTabText]}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'search' && styles.selectedTab]}
            onPress={() => setSelectedTab('search')}
          >
            <Ionicons 
              name={selectedTab === 'search' ? 'search-sharp' : 'search-outline'} 
              size={28} 
              color={selectedTab === 'search' ? '#ffffff' : '#ffffff'} 
            />
            <Text style={[styles.tabText, selectedTab === 'search' && styles.selectedTabText]}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'activity' && styles.selectedTab]}
            onPress={() => setSelectedTab('activity')}
          >
            <Ionicons 
              name={selectedTab === 'activity' ? 'notifications' : 'notifications-outline'} 
              size={26} 
              color={selectedTab === 'activity' ? '#ffffff' : '#ffffff'} 
            />
            <Text style={[styles.tabText, selectedTab === 'activity' && styles.selectedTabText]}></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'profile' && styles.selectedTab]}
            onPress={() => setSelectedTab('profile')}
          >
            <Ionicons 
              name={selectedTab === 'profile' ? 'person' : 'person-outline'} 
              size={26} 
              color={selectedTab === 'profile' ? '#ffffff' : '#ffffff'} 
            />
            <Text style={[styles.tabText, selectedTab === 'profile' && styles.selectedTabText]}></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D1B69',
  },
  contentWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#b3e5fc',
    lineHeight: 24,
    marginBottom: 20,
  },
  searchContainer: {
    marginTop: 26,
  },
  searchInput: {
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchResults: {
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchResultsText: {
    fontSize: 16,
    color: '#ffffff',
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#b3e5fc',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  featureList: {
    marginTop: 10,
  },
  featureItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginLeft: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e1e1e1',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1A1033',
    borderTopWidth: 1,
    borderTopColor: '#4A2B8C',
    paddingBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  selectedTab: {
    // backgroundColor: '#333333',
  },
  tabText: {
    fontSize: 12,
    color: '#b3e5fc',
    marginTop: 2,
  },
  selectedTabText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
