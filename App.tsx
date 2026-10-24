/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default function App() {

    const tmpObject = {
        nama: 'Unipda',
        tahun: 2026
    }
    const angka = [10, 20, 30, 40, 50]

    const variableString = 'Aku cinta INDONESIA'
    const [nilaiAwal, setnilaiAwal] = useState(0)
    const [nilaiString, setnilaiString] = useState(variableString)
    const [name, setName] = useState('Galang')
    const [show, setShow] = useState(false);
    const [stateObject, setStateObject] = useState(tmpObject)
    const [arstate, setArstate] = useState(angka)

    const functionTambah = () => {
        setnilaiAwal(nilaiAwal + 1)
    }

    const functionSeratus = () => {
        setnilaiAwal(nilaiAwal + 100)
        setnilaiString('Aku Cinta Sidoarjo')
    }

    const ubah = () => {
        setStateObject({
            ...stateObject,
            nama: 'Unipda Jaya',
            tahun: 2029
        })
    }

    return (
        <View style={style.container}>
            {
                arstate.map((v,i)=>{
                    return(
                        <View>
                            <Text style={{fontSize: 40}}>
                                {v}
                            </Text>
                        </View>
                    )
                })
            }
            
            <Button
                // onPress={angka}
                onPress={()=>setArstate([...arstate, 60])}
                title="TAMBAH 60"
                color="#2e3068"
            />
            <Text style={style.subtitle}>{angka[0]}</Text>
            <Text style={style.subtitle}>{nilaiAwal}</Text>
            <Text style={style.subtitle}>{nilaiString}</Text>
            <Text style={style.subtitle}>{stateObject.nama}</Text>
            <Text style={style.subtitle}>{stateObject.tahun}</Text>
            <Button
                onPress={ubah}
                title="JAYA JAYA JAYA"
                color="#000361"
            />

            <TextInput
                placeholder="Masukkan Nama."
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, padding: 10 }}
            />
            <Text style={{ marginTop: 16 }}>
                Halo, {name || 'Tamu'}!
            </Text>

            <Button
                onPress={() => setShow(!show)}
                title={show ? 'Sembunyikan' : 'Tampilkan'}
                color="#2d5489"
            />
            {show && (
                <Text style={{ marginTop: 10 }}>
                    Rahasia perusahaan tampil disini!
                </Text>
            )}

            <Button
                // onPress={()=> setnilaiAwal(nilaiAwal + 1)}
                onPress={functionTambah}
                title="Tambah 1"
                color="#022d00"
            />
            <Button
                // onPress={()=> setnilaiAwal(nilaiAwal + 1)}
                onPress={functionSeratus}
                title="All in One"
                color="#006aff"
            />

            <Button
                onPress={() => setnilaiAwal(0)}
                title="Reset Angka"
                color="#ff0000"
            />
            <Button
                onPress={() => setnilaiString('Aku cinta')}
                title="Aku Cinta"
                color="#5a97ff"
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    subtitle: { fontSize: 50, color: '#000000', marginTop: 4 },
})