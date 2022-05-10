import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View
      style={{
        flex: 1, // Get all the space available
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
        }}>
        Counter: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 100,
            padding: 10,
            marginTop: 10,
            marginHorizontal: 50,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Click me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
