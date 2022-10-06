import React from 'react';
import { View, Text } from 'react-native';


const Home = ({navigation}) => {
console.log(navigation, 'nav');
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home