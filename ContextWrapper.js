import { Text, View } from 'react-native'
import React, { Component, useContext, useState } from 'react'


export const MyContext = React.createContext()
export default function ContextWrapper(props) {
   const [tasks, setTasks] = useState([])
   const value = {
      tasks, setTasks
    }
    return (
      <MyContext.Provider value={value}>
         {props.children}
      </MyContext.Provider>
    )
}