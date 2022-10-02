import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './SettingButton.style';
import { useSelector } from 'react-redux';

const SettingButton = ({placeholder, onPress}) => {
  const theme=useSelector(state=>state.theme.defaultTheme);
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container,{borderBottomColor:theme.textColor}]}>
        <Text style={[styles.placeholder,{color:theme.textColor}]}>{placeholder}</Text>
      </View>
    </Pressable>
  );
};

export default SettingButton;
