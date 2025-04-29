import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BeMeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');  // 👈 เปลี่ยนจาก 'Login' เป็น 'Home'
    }, 2000); // 2 วินาที

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BeME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BeMeScreen;
