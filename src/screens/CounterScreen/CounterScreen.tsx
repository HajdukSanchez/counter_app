import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

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
      <Button
        onPress={() => setCounter(counter + 1)}
        title="Increase"
      />
    </View>
  );
};
