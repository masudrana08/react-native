import React from "react";


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home";
import Add from "./src/pages/Add";
import Library from "./src/pages/Library";
import Account from "./src/pages/Account";
import BottomNavbar from "./src/components/Home/BottomNavbar";

export const App = () => {
  const Stack = createNativeStackNavigator()
  console.log(Stack);
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Library"
            component={Library}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
        <BottomNavbar />
      </NavigationContainer>
  );
};


export default App;
