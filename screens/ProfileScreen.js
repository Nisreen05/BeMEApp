import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Nisreen Dahsaresamoh');
  const [isModalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');

  const handleSaveName = () => {
    if (newName.trim()) {
      setName(newName.trim());
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle-outline" size={100} color="black" />
        
        <View style={styles.nameRow}>
          <Text style={styles.nameText}>{name}</Text>
          <TouchableOpacity onPress={() => { setNewName(name); setModalVisible(true); }}>
            <Ionicons name="create-outline" size={18} color="black" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* History Section */}
      <TouchableOpacity style={styles.historyRow} onPress={() => navigation.navigate('History')}>
        <View style={styles.historyLeft}>
          <Ionicons name="time-outline" size={24} color="black" />
          <Text style={styles.historyText}>History</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>

      {/* Modal for Editing Name */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>แก้ไขชื่อ</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="กรอกชื่อใหม่"
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.button} onPress={handleSaveName}>
                <Text style={styles.buttonText}>บันทึก</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={[styles.buttonText, styles.cancelButtonText]}>ยกเลิก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editIcon: {
    marginLeft: 8,
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#C7DFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  cancelButtonText: {
    color: '#333',
  },
});

export default ProfileScreen;
