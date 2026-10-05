import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

const DUMMY_SONGS: Song[] = [
  { id: '1', title: 'Menari di Bawah Hujan', artist: 'Nabila', duration: '03:45' },
  { id: '2', title: 'Langkah Kaki', artist: 'Kilas Balik', duration: '04:12' },
  { id: '3', title: 'Bintang Malam', artist: 'Astronauts', duration: '02:58' },
  { id: '4', title: 'Cerita Lama', artist: 'Nostalgia', duration: '05:01' },
  { id: '5', title: 'Senandung Senja', artist: 'Melodi', duration: '03:20' },
];

export default function App() {
  const renderSongItem = ({ item }: { item: Song }) => (
    <View style={styles.songRow}>
      <Image
        source={{ uri: `https://picsum.photos/100/100?random=${item.id}` }}
        style={styles.songThumb}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <Text style={styles.songDuration}>{item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Playlist Saya</Text>
        <Text style={styles.subHeader}>5 Lagu • Favorit Minggu Ini</Text>

        <FlatList
          data={DUMMY_SONGS}
          keyExtractor={(item) => item.id}
          renderItem={renderSongItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subHeader: {
    fontSize: 14,
    color: '#B3B3B3',
    marginBottom: 20,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 8,
  },
  songThumb: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
  },
  songTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  songArtist: {
    color: '#B3B3B3',
    fontSize: 12,
    marginTop: 2,
  },
  songDuration: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});