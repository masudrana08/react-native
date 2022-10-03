import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useContext } from "react";
import { MyContext } from "../../ContextWrapper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({ item }) {
  const { tasks, setTasks } = useContext(MyContext);

  const deleteTask = (id) => {
    const filteredTask = tasks.filter((t) => t.id !== id);
    setTasks(filteredTask);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.text}</Text>
      {/* <TouchableHighlight style={styles.delBtn}>
          <Text onPress={()=>deleteTask(item.id)}>Del</Text>
        </TouchableHighlight> */}
      <View>
        <Icon 
          name="delete-outline" 
          size={30} color="white" 
          onPress={()=>deleteTask(item.id)}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#F5023B",
    margin: 5,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  delBtn: {
    borderRadius: 10,
    backgroundColor: "#F24624",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
