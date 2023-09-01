import { StyleSheet, TextInput as NewTextInput , View , Button} from 'react-native'
import React from 'react'

const TextInput = ({ textValue , onHandleChangeItem , addItem}) => {
  return (
    <View style={styles.inputContainer}>
    <NewTextInput
      placeholder="New Item"
      placeholderTextColor= "white"
      style={styles.input}
      value={textValue}
      onChangeText={onHandleChangeItem}
    />
    <Button title="ADD" color={"white"} onPress={addItem} />
  </View>
  );
}

export default TextInput

const styles = StyleSheet.create({

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

})