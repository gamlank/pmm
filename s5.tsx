import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://picsum.photos/150/150?random=99' }}
            style={styles.avatar}
          />
          <Text style={styles.profileName}>Gamlank</Text>
          <Text style={styles.profileBadge}>Member Premium</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Playlist</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>148</Text>
            <Text style={styles.statLabel}>Disukai</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>35</Text>
            <Text style={styles.statLabel}>Artis</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Pengaturan</Text>
        <View style={styles.menuList}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Kualitas Audio</Text>
            <Text style={styles.menuValue}>Tinggi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Mode Hemat Data</Text>
            <Text style={styles.menuValue}>Matikan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Akun & Keamanan</Text>
            <Text style={styles.menuValue}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBadge: {
    color: '#1DB954',
    fontSize: 12,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1E1E1E',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 10,
  },
  menuList: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  menuValue: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});