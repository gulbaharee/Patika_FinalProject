import React from 'react';
import {View, Text} from 'react-native';
import styles from './ChatBox.style';
import {useSelector} from 'react-redux';

const ChatBox = ({message}) => {
  const theme = useSelector(state => state.theme.defaultTheme);

  return (
    <View style={styles.container}>
      <View
        style={[styles.innerContainer, {backgroundColor: theme.messageBox}]}>
        <Text style={[styles.box, {color: theme.textColor}]}>{message}</Text>
      </View>
    </View>
  );
};

export default ChatBox;
