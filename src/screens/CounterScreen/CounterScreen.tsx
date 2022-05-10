import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FloatingActionButton } from '../../components/Components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <FloatingActionButton
        title="+1"
        alignment="right"
        onPress={() => setCounter(counter + 1)}></FloatingActionButton>
      <FloatingActionButton
        title="-1"
        alignment="left"
        onPress={() => setCounter(counter - 1)}></FloatingActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Get all the space available
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
});
