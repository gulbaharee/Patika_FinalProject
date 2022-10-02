import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './TextInput.style';
import {useSelector} from 'react-redux';

const Input = ({placeholder, onChangeText, password}) => {
  const theme = useSelector(state=>state.theme.defaultTheme);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input,{backgroundColor:theme.buttonColor}]}
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
