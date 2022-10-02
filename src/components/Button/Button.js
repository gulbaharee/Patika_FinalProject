import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Button.style';
import {useSelector} from 'react-redux';

const Button = ({placeholder, onPress}) => {
  const theme = useSelector(state => state.theme.defaultTheme);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.innerContainer, {backgroundColor: theme.buttonColor}]}>
          <Text style={styles.text}>{placeholder}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Button;
