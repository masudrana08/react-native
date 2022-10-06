import { Text, View } from "react-native";
import React, { Component, useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from "./App";
export const MyContext = React.createContext();
export default function ContextWrapper(props) {
   const Stack  = createNativeStackNavigator()
  const [tasks, setTasks] = useState([]);
  const value = {
    tasks,
    setTasks,
  };
  return (
    <MyContext.Provider value={value}>
         <App />
    </MyContext.Provider>
  );
}
