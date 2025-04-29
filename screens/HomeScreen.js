import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [stories, setStories] = useState([]);

  const fetchStories = () => {
    fetch('http://10.10.0.68:3000/stories')
      .then(res => res.json())
      .then(data => setStories(data))
      .catch(err => console.error('Failed to fetch stories:', err));
  };

  useFocusEffect(
    useCallback(() => {
      fetchStories();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome <Ionicons name="heart" size={24} color="black" />
        </Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.questionText}>How was your day?</Text>

        <TouchableOpacity 
          style={styles.goodButton}
          onPress={() => navigation.navigate('GoodStory')}
        >
          <Text style={styles.goodButtonText}>GOOD</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.badButton}
          onPress={() => navigation.navigate('BadStory')}
        >
          <Text style={styles.badButtonText}>BAD</Text>
        </TouchableOpacity>
      </View>

      {/* Story List */}
      <View style={styles.storySection}>
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.storyItem}>
              <Text style={styles.storyTopic}>{item.topic}</Text>
              <Text>{item.story}</Text>
              <Text style={styles.storyDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>

      {/* Bottom Tab */}
      <View style={styles.bottomTab}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 60,
  },
  welcomeText: { fontSize: 26, fontWeight: 'bold' },
  body: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 90,
  },
  questionText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  goodButton: {
    backgroundColor: '#D0E3FF',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  badButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '80%',
    borderRadius: 50,
    alignItems: 'center',
  },
  goodButtonText: { color: 'black', fontWeight: 'bold', fontSize: 18 },
  badButtonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  storySection: { flex: 1, marginTop: 30, paddingHorizontal: 20 },
  storyItem: {
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
  },
  storyTopic: { fontSize: 16, fontWeight: 'bold' },
  storyDate: { fontSize: 12, color: 'gray', marginTop: 5 },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'center', // << ทำให้ไอคอนอยู่ตรงกลาง
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HomeScreen;
