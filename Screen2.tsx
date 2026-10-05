import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

const DUMMY_ALBUMS = [
  { id: '1', title: 'Midnight City', artist: 'Synth Wave', image: 'https://picsum.photos/200/200?random=1' },
  { id: '2', title: 'Acoustic Chill', artist: 'Sore Hari', image: 'https://picsum.photos/200/200?random=2' },
  { id: '3', title: 'Indie Vibes', artist: 'Kolektif Musik', image: 'https://picsum.photos/200/200?random=3' },
];

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Selamat Datang!</Text>
        <Text style={styles.subHeader}>Rekomendasi Hari Ini</Text>

        <Text style={styles.sectionTitle}>Album Populer</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {DUMMY_ALBUMS.map((item) => (
            <View key={item.id} style={styles.albumCard}>
              <Image source={{ uri: item.image }} style={styles.albumImage} />
              <Text style={styles.albumTitle}>{item.title}</Text>
              <Text style={styles.albumArtist}>{item.artist}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Kategori Genre</Text>
        <View style={styles.genreGrid}>
          <View style={[styles.genreCard, { backgroundColor: '#FF5733' }]}>
            <Text style={styles.genreText}>Pop</Text>
          </View>
          <View style={[styles.genreCard, { backgroundColor: '#33FF57' }]}>
            <Text style={styles.genreText}>Rock</Text>
          </View>
          <View style={[styles.genreCard, { backgroundColor: '#3357FF' }]}>
            <Text style={styles.genreText}>Jazz</Text>
          </View>
          <View style={[styles.genreCard, { backgroundColor: '#F333FF' }]}>
            <Text style={styles.genreText}>Lo-Fi</Text>
          </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 10,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  albumCard: {
    marginRight: 15,
    width: 130,
  },
  albumImage: {
    width: 130,
    height: 130,
    borderRadius: 8,
    marginBottom: 6,
  },
  albumTitle: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  albumArtist: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  genreCard: {
    width: '48%',
    height: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  genreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});