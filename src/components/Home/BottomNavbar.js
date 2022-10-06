import React from 'react';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, Text } from 'react-native';

const HomeIcon = () => <EntypoIcon name="home" size={25} color="white" />;
const PlusIcon = () => <AntDesignIcon name="pluscircle" size={25}   color="white" />;
const LibraryIcon = () => <MaterialIcon name="video-library" size={25} color="white" />;

export default BottomNavbar = ()=> {
   const theme = useTheme()
   const styles = useStyleSheet(myStyle)
   return(
      <View style={styles.container}>
         <View style={styles.nav}>
            <HomeIcon/>
            <PlusIcon/>
            <LibraryIcon/>
         </View>
      </View>
   )
}

const myStyle = StyleService.create({
   container: {
      borderTopWidth: 3,
      borderTopColor: 'color-primary-600',
      backgroundColor: 'color-primary-500',
      height: 60,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center'
   },
   nav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
   }

})