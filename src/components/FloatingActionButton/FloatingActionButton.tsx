import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FloatingActionButtonProps {
  title: string;
  onPress: () => void;
  alignment?: 'left' | 'right';
}

export const FloatingActionButton = ({
  title,
  onPress,
  alignment = 'right',
}: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        alignment === 'right'
          ? styles.buttonContainerRight
          : styles.buttonContainerLeft,
      ]}
      onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
