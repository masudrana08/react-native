import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import BottomNavbar from './BottomNavbar'

const NavigationWrapper = (props) => {
  return (
    <View style={{flex:1}}>
      <HeaderNavbar />
      <View style={{flex:1}}>
        {props.children}
      </View>
      <BottomNavbar />
    </View>
  )
}

export default NavigationWrapper