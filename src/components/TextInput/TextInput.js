import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './TextInput.style';
import {useSelector} from 'react-redux';

const Input = ({placeholder, onChangeText, password,message}) => {
  const theme = useSelector(state=>state.theme.defaultTheme);
  return (
    <View style={styles.container}>
      <TextInput
        style={[message ? styles.message : styles.input,{backgroundColor:theme.buttonColor}]}
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
