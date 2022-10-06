import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomNavbar from '../components/Home/BottomNavbar';
import { Layout } from '@ui-kitten/components';

const Home = () => {

  return (
   <Layout style={{flex:1}}>
    <BottomNavbar></BottomNavbar>
   </Layout>
  );
};

export default Home