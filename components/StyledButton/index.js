import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const colorText = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor:backgroundColor}]}
            onPress={() => {
                console.warn('Hey There')
            }}
        >
            <Text style={[styles.text, {colorText:colorText}]}>Custom Order</Text>
        </Pressable>
    </View>
  );
};

export default StyledButton;