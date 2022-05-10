import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonContainerRight]}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonContainerLeft]}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-1</Text>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
  },
  buttonContainerLeft: {
    left: 25,
  },
  buttonContainerRight: {
    right: 25,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#5856d6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
