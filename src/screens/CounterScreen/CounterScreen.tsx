import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View style={styles.buttonBox}>
          <Text style={styles.buttonText}>Click me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Get all the space available
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonBox: {
    marginTop: 10,
    marginHorizontal: 50,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
