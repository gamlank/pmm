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
        <Text style={styles.nowPlayingHeader}>SEDANG DIPUTAR</Text>

        <Image
          source={{ uri: 'https://picsum.photos/300/300?random=5' }}
          style={styles.nowPlayingCover}
        />

        <Text style={styles.songTitleLarge}>Menari di Bawah Hujan</Text>
        <Text style={styles.artistNameLarge}>Nabila</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.timeText}>01:24</Text>
            <Text style={styles.timeText}>03:45</Text>
          </View>
        </View>

        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.controlBtn}>
            <Text style={styles.controlText}>⏮</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.controlBtn, styles.playBtn]}>
            <Text style={styles.playControlText}>⏸</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlBtn}>
            <Text style={styles.controlText}>⏭</Text>
          </TouchableOpacity>
        </View>
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
  nowPlayingHeader: {
    color: '#B3B3B3',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 20,
  },
  nowPlayingCover: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 30,
  },
  songTitleLarge: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  artistNameLarge: {
    color: '#B3B3B3',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 30,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 30,
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#333333',
    borderRadius: 2,
    width: '100%',
  },
  progressBarFill: {
    height: 4,
    backgroundColor: '#1DB954',
    width: '40%',
    borderRadius: 2,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
  },
  controlBtn: {
    padding: 10,
  },
  controlText: {
    color: '#FFFFFF',
    fontSize: 28,
  },
  playBtn: {
    backgroundColor: '#1DB954',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playControlText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
});