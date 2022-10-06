import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, Text,  TouchableHighlight } from 'react-native';

const HomeIcon = () => <EntypoIcon name="home" size={25} color="white" />;
const PlusIcon = () => <AntDesignIcon name="pluscircle" size={25}   color="white" />;
const LibraryIcon = () => <MaterialIcon name="video-library" size={25} color="white" />;

export default BottomNavbar = ()=> {
   const navigation = useNavigation()
   const theme = useTheme()
   const styles = useStyleSheet(myStyle)
   return(
      <View style={styles.container}>
         <View style={styles.nav}>
            <TouchableHighlight onPress={()=>navigation.navigate("Home")}>
               <HomeIcon />
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>navigation.navigate("Add")}>
               <PlusIcon/>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>navigation.navigate("Library")}>
               <LibraryIcon/>
            </TouchableHighlight>
         </View>
      </View>
   )
}

const myStyle = StyleService.create({
   container: {
      borderTopWidth: 3,
      borderTopColor: 'color-primary-600',
      backgroundColor: 'color-primary-500',
      height: 55,
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