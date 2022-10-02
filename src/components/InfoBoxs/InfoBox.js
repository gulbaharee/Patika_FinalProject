import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './InfoBox.style';
import {useSelector} from 'react-redux';

const InfoBox = ({placeholder,onChangeText,password}) => {
  const theme = useSelector(state => state.theme.defaultTheme);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {backgroundColor: theme.buttonColor}]}
        autoCapitalize="none"
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={password}
        autoCorrect={false}
      />
    </View>
  );
};
export default InfoBox;
