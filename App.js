

import React, { Fragment, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ContextWrapper, { MyContext } from './ContextWrapper';
import AddItem from './src/components/AddItem';
import ListItem from './src/components/ListItem';


const App = () => {
  const {tasks} = useContext(MyContext)
  return (
      <ScrollView>
        <AddItem />
        {
          tasks.map(item=>{
            return <ListItem key={item.id}>{item.text}</ListItem>
          })
        }
      </ScrollView>
  );
};

const Wrapped = ()=> {
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  )
}

export default Wrapped;
