/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//
// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//
// //   return (
// //     <SafeAreaProvider>
// //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// //       <View style={{marginTop: 120, marginRight: 20, paddingHorizontal: 20}}>
// //         <Text style={{fontSize: 50}}>Bukankah Ini My.. First Project?</Text>
// //       </View>
// //     </SafeAreaProvider>
// //   );
//
//
//
// export default App;

export default function App(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Halo Mobile Developer</Text>
            <Text style={style.subtitle}>Komponen native pertama saya</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
    title: { fontSize: 20, fontWeight: 'bold', color: '#000000'},
    subtitle: { fontSize: 14, color: '#000000', marginTop: 4},
})