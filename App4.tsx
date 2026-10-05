import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ButtonDemo() {
    return (
        <View>
            <Pressable>
                onPress=() => Alert.alert('Sukses', 'Data')
            </Pressable>
        </View>
    )
}