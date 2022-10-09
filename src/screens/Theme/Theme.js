import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from '../../store/themeSlice';
import styles from './Theme.style';

const Theme = () => {
  const theme = useSelector(state => state.theme.defaultTheme);
  //change theme
  const dispatch = useDispatch();
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Button
        placeholder={theme.typeBool ? 'Dark Mode' : 'Light Mode'}
        onPress={() => dispatch(setTheme())}
      />
    </View>
  );
};

export default Theme;
