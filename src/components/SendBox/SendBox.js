import React from 'react';
import TextInput from '../TextInput/TextInput';
import Icon from 'react-native-vector-icons/dist/Feather';
import {View} from 'react-native';
import styles from './SendBox.style';
import {useSelector} from 'react-redux';

const SendBox = ({onPress,onChangeText}) => {
  const theme = useSelector(state => state.theme.defaultTheme);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput placeholder="message" message={true} onChangeText={onChangeText}/>
        <Icon
          name="send"
          size={24}
          color={theme.textColor}
          style={styles.icon}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default SendBox;
