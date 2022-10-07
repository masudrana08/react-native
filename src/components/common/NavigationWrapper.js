import { View, Text } from 'react-native'
import React from 'react'
import HeaderNavbar from './HeaderNavbar'
import BottomNavbar from './BottomNavbar'

const NavigationWrapper = (props) => {
  return (
    <>
      <HeaderNavbar />
      {props.children}
      <BottomNavbar />
    </>
  )
}

export default NavigationWrapper