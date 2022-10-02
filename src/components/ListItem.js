import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container : {
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F5023B',
      margin: 5,
      borderRadius: 10
   },
   text : {
      textAlign:'center',
      color: 'white',
      fontSize: 18
   }
})