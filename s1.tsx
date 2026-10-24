import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.centerContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/300/300?random=10' }}
          style={styles.welcomeImage}
        />
        <Text style={styles.appName}>HoregMusic</Text>
        <Text style={styles.tagline}>
          Dengarkan Musik Favoritmu Kapan Saja & Di Mana Saja
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Mulai Mendengarkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 30,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    color: '#B3B3B3',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});