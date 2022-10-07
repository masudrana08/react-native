import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';

const Home = ({navigation}) => {
console.log(navigation, 'nav');
  return (
    <SafeAreaView>
      <Text>This is hom</Text>
    </SafeAreaView>
  );
};

export default Home