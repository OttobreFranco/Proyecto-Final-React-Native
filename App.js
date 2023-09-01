import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

import Modal from './components/Modal';

import SafeAreaView from "./components/SafeAreaView";

import TextInput from "./components/TextInput";


export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemList, setItemListValue] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalName, setModalName] = useState("");

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {

    setItemListValue((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.textContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    let arr = itemList;
   
    arr.splice(itemSelected, 1);
    setItemListValue(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);

    let arr = itemList;
    let itemName = arr.at(index).value;

    setModalName(itemName);
  };


  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>
          Lista de compras
        </Text>
      </View>
      
      <TextInput textValue={textValue} onHandleChangeItem={onHandleChangeItem} addItem={addItem} />

      <SafeAreaView itemList={itemList} renderListItem={renderListItem}/>
        
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} modalName={modalName}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 70,
    backgroundColor: "#5C8374",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#93B1A6",
    borderRadius: 10,
    color:"#c3dbd2",
  },

  input: {
    width: 200,
    height: 50,
    fontSize: 20,
    paddingLeft: 12,
    color: "white",
  },


  textContainer: {
    backgroundColor:"#93B1A6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    color: "white",
    padding: 10,
    marginBottom: 7,
    width: 350,
  },

  text: {
    color: "white",
    fontSize: 24,
  },

  title: {
    fontSize: 35,
    paddingBottom: 15,
    color: "white",
  }
});
