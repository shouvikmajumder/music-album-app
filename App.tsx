import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Animated, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';

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
            <Text style={styles.title}>Welcome!</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Getting Started</Text>
              <Text style={styles.cardText}>
                Tap the tabs below to explore different sections of the app.
                Each section demonstrates different React Native features.
              </Text>
            </View>
          </Animated.View>
        );
      case 'search':
        return (
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Search 🔍</Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search anything..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#999"
              />
              <View style={styles.searchResults}>
                {searchQuery ? (
                  <Text style={styles.searchResultsText}>
                    Search results for: {searchQuery}
                  </Text>
                ) : (
                  <Text style={styles.searchPlaceholder}>
                    Start typing to search...
                  </Text>
                )}
              </View>
            </View>
          </Animated.View>
        );
      case 'profile':
        return (
          <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Profile 👤</Text>
            <View style={styles.profileCard}>
              <View style={styles.avatarPlaceholder} />
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileBio}>
                Mobile App Developer
              </Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {renderContent()}
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'home' && styles.selectedTab]}
          onPress={() => setSelectedTab('home')}
        >
          <Text style={[styles.tabIcon, selectedTab === 'home' && styles.selectedTabText]}>🏠</Text>
          <Text style={[styles.tabText, selectedTab === 'home' && styles.selectedTabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'search' && styles.selectedTab]}
          onPress={() => setSelectedTab('search')}
        >
          <Text style={[styles.tabIcon, selectedTab === 'search' && styles.selectedTabText]}>🔍</Text>
          <Text style={[styles.tabText, selectedTab === 'search' && styles.selectedTabText]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'activity' && styles.selectedTab]}
          onPress={() => setSelectedTab('activity')}
        >
          <Text style={[styles.tabIcon, selectedTab === 'activity' && styles.selectedTabText]}>📊</Text>
          <Text style={[styles.tabText, selectedTab === 'activity' && styles.selectedTabText]}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'profile' && styles.selectedTab]}
          onPress={() => setSelectedTab('profile')}
        >
          <Text style={[styles.tabIcon, selectedTab === 'profile' && styles.selectedTabText]}>👤</Text>
          <Text style={[styles.tabText, selectedTab === 'profile' && styles.selectedTabText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  searchContainer: {
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchResults: {
    marginTop: 20,
    backgroundColor: '#fff',
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
    color: '#1a1a1a',
  },
  searchPlaceholder: {
    fontSize: 16,
    color: '#999',
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
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  selectedTab: {
    backgroundColor: '#f0f0f0',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  selectedTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
