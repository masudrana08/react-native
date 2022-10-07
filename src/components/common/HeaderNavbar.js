import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, Text,  TouchableHighlight } from 'react-native';

const AccountIcon = () => <MaterialIcon name="account-circle" size={25} color="white" />;

export default HeaderNavbar = ()=> {
   const navigation = useNavigation()
   const theme = useTheme()
   const styles = useStyleSheet(myStyle)
   return(
      <View style={styles.container}>
         <View style={styles.nav}>
            <View>
               <Text style={styles.logo}>FTube</Text>
            </View>
            <TouchableHighlight onPress={()=>navigation.navigate("Library")}>
               <AccountIcon/>
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
      top: 0,
      justifyContent: 'center'
   },
   nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 20,
      paddingLeft: 20
   },
   logo : {
      color: 'secondary-color',
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold' 


   }
})