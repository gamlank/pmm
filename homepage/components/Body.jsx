import { View, Text, Button } from 'react-native'
import React from 'react'

const Body = (props) => {
  console.log(props.stateArray);
  const clicked = () => {
    props.fungsi([...props.stateArray, { id: 4, nama: "galang5" }])
  }
  return (
    <View style={{ height: '30%', backgroundColor: 'green', justifyContent: 'center' }}>
      <Text>body</Text>
      {props.stateArray.map((v, i) => {
        return (
          <View>
            <Text style={{ fontSize: 40 }}> {v.nama} </Text>
          </View>
        )
      })
      }
      <Text>{props.nama}</Text>
      <Button
        title="Klik Disini"
        onPress={() => { clicked() }}
        color="#676767">
      </Button>
    </View>
  )
}

export default Body