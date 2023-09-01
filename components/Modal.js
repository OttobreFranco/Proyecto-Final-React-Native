import { StyleSheet, Text, View , Modal as NewModal, Button } from "react-native";
import React from "react";

const Modal = ({ modalVisible , onHandleDelete , modalName }) => {
  return (
    <NewModal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitle}>Eliminar "{modalName}"</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text>Está seguro de eliminar el elemento <Text style={{fontWeight:"bold"}}>{modalName}</Text> de la lista?</Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              color={"white"}
              title="Confirmar"
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    color: "black",
    fontSize: 30,
  },
  modalMessage: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: "#183D3D",
    borderRadius: 10,
    padding: 10,
  },

  modalButtonText: {
    color: "white",
  },
});
