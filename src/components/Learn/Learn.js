import { View, Text, Image, FlatList, SectionList, StyleSheet, Platform, TouchableHighlight } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import CatImg from '../../images/cat.png'
import AddItem from '../AddItem'

import ListItem from '../ListItem';


export default function Learn() {
 const  Stack = createNativeStackNavigator()
  return (
    <View>
      hey
    </View>
  )
}

const styles = StyleSheet.create({
  btn : {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    width: 70,
    height: 40,
    borderRadius: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
  txt : {
    font: 20,
    fontWeight: 'bold'
  }
})