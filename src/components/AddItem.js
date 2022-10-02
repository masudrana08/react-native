import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { MyContext } from '../../ContextWrapper'

export default function AddItem() {
   const {tasks, setTasks} = useContext(MyContext)
   const [text, setText] = useState("")
   console.log(tasks);
  return (
    <View>
      <TextInput 
         style={styles.input} 
         placeholder='Add Task'
         returnKeyType="done"
         onChangeText={(e)=>setText(e)}
      />
      <View style={styles.btn}>
      <Button 
         
         title="Submit" 
         onPress={()=>{
            setTasks([...tasks, {id:tasks.length, text}]),
            setText('')
         }}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   input : {
      backgroundColor:'lightblue',
      margin: 10,
      borderRadius: 5,
      paddingLeft: 10,
      color: 'black',
      fontSize: 18
   },
   btn: {
      marginLeft: 10,
      marginRight: 10,
   }
})