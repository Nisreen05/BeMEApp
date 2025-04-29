// BadStoryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useHistory } from '../HistoryContext';

const BadStoryScreen = ({ navigation }) => {
  const [topic, setTopic] = useState('');
  const [story, setStory] = useState('');
  const { addHistory } = useHistory();

  const handleSubmit = () => {
    if (!topic || !story) {
      Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
    const newStory = {
      type: 'bad',
      topic,
      story,
      date: new Date().toLocaleString(),
    };
    addHistory(newStory);
    setTopic('');
    setStory('');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>เล่าเรื่องราวไม่ดีของคุณ</Text>

        <TextInput
          style={styles.input}
          placeholder="หัวข้อเรื่องราว"
          value={topic}
          onChangeText={setTopic}
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="เล่าเรื่องราวไม่ดีที่เกิดขึ้น..."
          value={story}
          onChangeText={setStory}
          placeholderTextColor="#aaa"
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#f44336',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BadStoryScreen;
