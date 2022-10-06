import { Text, View } from "react-native";
import React, { Component, useContext, useState } from "react";
import { default as theme } from './src/assets/theme.json'; 
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import App from "./App";
export const MyContext = React.createContext();
export default function ContextWrapper(props) {
  const [tasks, setTasks] = useState([]);
  const value = {
    tasks,
    setTasks,
  };
  return (
    <MyContext.Provider value={value}>
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
         <App />
      </ApplicationProvider>
    </MyContext.Provider>
  );
}
