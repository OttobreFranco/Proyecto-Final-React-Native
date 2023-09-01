import { StyleSheet, SafeAreaView as NewSafeAreaView , FlatList } from "react-native";
import React from "react";

const SafeAreaView = ({ itemList , renderListItem }) => {
  return (
    <NewSafeAreaView style={styles.listContainer}>
      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </NewSafeAreaView>
  );
};

export default SafeAreaView;

const styles = StyleSheet.create({

    listContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,    
        height: 600,
        paddingHorizontal: 10,
      },
    
});
