import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Header = ({title, goBack, onPress}) => {
  const theme = useSelector(state => state.theme.defaultTheme);

  return (
    <View
      style={[
        goBack ? styles.containerWithIcon : styles.container,
        {backgroundColor: theme.headerColor},
      ]}>
      {goBack ? (
        <Icon
          name="left"
          size={24}
          color={theme.textColor}
          style={styles.icon}
          onPress={onPress}
        />
      ) : null}
      <Text
        style={[
          goBack ? styles.textWithIcon : styles.text,
          {color: theme.textColor},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
