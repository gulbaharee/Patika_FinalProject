import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './TextInput.style';

const Input = ({placeholder, onChangeText, password}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={password}
        autoCorrect={false}
      />
    </View>
  );
};

export default Input;
