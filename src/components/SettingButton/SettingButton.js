import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './SettingButton.style';

const SettingButton = ({placeholder, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>
    </Pressable>
  );
};

export default SettingButton;
