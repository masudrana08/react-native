import React, { Fragment, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import ContextWrapper, { MyContext } from "./ContextWrapper";
import AddItem from "./src/components/AddItem";
import Learn from "./src/components/Learn/Learn";
import ListItem from "./src/components/ListItem";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const { tasks } = useContext(MyContext);
  return (
    <ScrollView>
      <AddItem />
      {tasks.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </ScrollView>
  );
};

const Wrapped = () => {
  const Stack = createNativeStackNavigator()
  return (
    <ContextWrapper>
      {/* <App /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="additem"
            component={AddItem}
            options={{ title: "add item title" }}
          />
          <Stack.Screen
            name="listitem"
            component={ListItem}
            options={{ title: "list item title" }}
          />
        </Stack.Navigator>
      <Learn />
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default Wrapped;
