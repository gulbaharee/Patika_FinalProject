import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import SettingButton from '../../components/SettingButton/SettingButton';
import styles from './Profile.style';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signOut} from '../../store/authSlice';

const Profile = () => {
  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const theme = useSelector(state => state.theme.defaultTheme);
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem('activeUser');
      dispatch(signOut());
      navigate('SignIn');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(activeUser);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header title="Profile" />
      <ProfileHeader username={activeUser.username} />
      <View>
        <SettingButton
          placeholder="Account"
          onPress={() => navigate('Account')}
        />
        <SettingButton placeholder="Theme" onPress={() => navigate('Theme')} />
        <SettingButton placeholder="Log Out" onPress={LogOut} />
      </View>
    </View>
  );
};

export default Profile;
