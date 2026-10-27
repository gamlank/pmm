import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const homepage = (props: any) => {
    console.log(props);

    const [stateArray, setStateArray] = useState([
        { id: 1, nama: "galang1" },
        { id: 2, nama: "galang2" },
        { id: 3, nama: "galang3" },
    ]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 10 }}>
                <Text>REZA DAN {props.namaprops}</Text>
                <Header></Header>
                <Body stateArray={stateArray} nama="galang4" fungsi={setStateArray}></Body>
                <Footer></Footer>
            </View>
        </SafeAreaView>
    )
}

export default homepage