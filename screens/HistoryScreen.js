import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useHistory } from '../HistoryContext';

const HistoryScreen = ({ navigation }) => {
  const { historyList, deleteHistory } = useHistory();

  const handleDelete = (index) => {
    Alert.alert('ยืนยันการลบ', 'คุณต้องการลบเรื่องราวนี้ใช่ไหม?', [
      { text: 'ยกเลิก', style: 'cancel' },
      { text: 'ลบ', style: 'destructive', onPress: () => deleteHistory(index) },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {historyList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="folder-open-outline" size={80} color="#ccc" />
          <Text style={styles.emptyText}>ยังไม่มีเรื่องราวที่บันทึก</Text>
        </View>
      ) : (
        historyList.map((item, index) => (
          <View
            key={index}
            style={[styles.card, item.type === 'good' ? styles.goodCard : styles.badCard]}
          >
            <View style={styles.cardHeader}>
              <Ionicons
                name={item.type === 'good' ? 'happy-outline' : 'sad-outline'}
                size={24}
                color={item.type === 'good' ? '#4CAF50' : '#f44336'}
                style={styles.icon}
              />
              <Text style={styles.typeText}>
                {item.type === 'good' ? 'Good Story' : 'Bad Story'}
              </Text>
            </View>

            <Text style={styles.topic}>{item.topic}</Text>
            <Text style={styles.story}>{item.story}</Text>
            <Text style={styles.date}>{item.date}</Text>

            <View style={styles.actions}>
              {/* ปุ่มลบ */}
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.actionButton}>
                <Ionicons name="trash-outline" size={22} color="#f44336" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginTop: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  goodCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  badCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#f44336',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  topic: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
    color: '#222',
  },
  story: {
    fontSize: 15,
    color: '#555',
    marginVertical: 6,
  },
  date: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionButton: {
    marginLeft: 16,
  },
});

export default HistoryScreen;
