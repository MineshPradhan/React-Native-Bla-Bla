import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = () => {
  return (
    <View style={styles.container}>
        <Pressable
            style={styles.button}
            onPress={() => {
                console.warn('Hey There')
            }}
        >
            <Text>Custom Order</Text>
        </Pressable>
    </View>
  );
};

export default StyledButton;