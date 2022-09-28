import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Button.style';

const Button = ({placeholder, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{placeholder}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Button;
