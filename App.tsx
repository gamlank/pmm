import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Homepage from './homepage/homepage'

const App = () => {

    const nama = "ANTON";
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Homepage namaprops = {nama}/>
        </SafeAreaView>
    )
}

export default App