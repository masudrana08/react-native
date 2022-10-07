import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Platform, Dimensions } from 'react-native';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
import NavigationWrapper from '../components/common/NavigationWrapper';
import Video from 'react-native-video';
import video from "../../src/assets/video.mp4"
const Home = ({navigation}) => {
  const styles = useStyleSheet(mystyle)
  return (
  //  <NavigationWrapper>
       <ScrollView style={styles.container}>
        <Video  
              source={video}           
              paused={true}  
              fullscreenAutorotate={true}
              style={styles.backgroundVideo}  
              repeat={true}   
              controls={true}
              playInBackground={true} 
              posterResizeMode="center"   
              resizeMode="cover"           
          />
        <Video  
              source={video}           
              paused={true}  
              fullscreenAutorotate={true}
              fullscreen= {true}
              style={styles.backgroundVideo}  
              repeat={true}   
              controls={true}
              playInBackground={true} 
              posterResizeMode="center"   
              resizeMode="cover"           
          />
       </ScrollView>
  //  </NavigationWrapper>
    
  );
};

var mystyle = StyleService.create({
  container: {
    height: 250,
    width: "100%"
  },
  backgroundVideo: {
    height: 250,
    width: "100%",
    marginTop: 10,
    backgroundColor:'red',
    
  }
});

export default Home