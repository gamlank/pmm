import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardDemo() {
    return (
        <View style={style.card}>
            <Text style={style.heading}>Kartu Profil</Text>
            <Text style={style.body}>Styling native terorganisi rapi.</Text>
        </View>
    );
}

const style = StyleSheet.create({
    card: { backgroundColor: '#860000', padding: 25, borderRadius: 10},
    heading: { fontSize: 18, fontWeight: 'bold', color: '#000000'},
    body: { fontSize: 14, color: '#000000, marginTop: 6'},
})