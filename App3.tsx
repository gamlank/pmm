import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RowLayoutDemo() {
    return (
        <View style={style.row}>
            <View stylle={[style.box, {backgorundColor: '#38BDF8'}]}>
                <Text style={style.label}>Kolom 1</Text>
            </View>
            <View stylle={[style.box, {backgorundColor: '#34D399'}]}>
                <Text style={style.label}>Kolom 2</Text>
            </View>
        </View>
        
    );
}

const style = StyleSheet.create({
    row: { flexDirection: 'row', gap: 12, padding: 16 },
    box: { flex: 1, height: 60, justifyContent: 'center', borderRadius: 8 },
    label: { color: '#000000', fontWeight: 'bold'},

})