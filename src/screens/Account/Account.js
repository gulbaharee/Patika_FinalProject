import React, {useState,useCallback} from 'react';
import {View, Text} from 'react-native';
import styles from './Account.style';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import InfoBox from '../../components/InfoBoxs/InfoBox';
import Button from '../../components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {app} from '../../utils/firebase';
import {getFirestore, updateDoc, doc} from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import ImagePickerModal from '../../components/ImagePicker/ImagePicker';
import * as ImagePicker from 'react-native-image-picker';

const Account = () => {
  const [image, setImage] = useState(null);
  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const theme = useSelector(state => state.theme.defaultTheme);

  const db = getFirestore(app);
  const auth = getAuth(app);

  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const update = () => {
    if (password === passwordCheck) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async res => {
          await updateDoc(doc(db, 'users', res.user.uid), {
            username: username,
          });
        })
        .catch(error => console.log(error));
    }
  };

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
    setVisible(false);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ProfilePhoto onPress={() => setVisible(true)} url={uri} />
      <InfoBox
        placeholder={activeUser.username}
        onChangeText={text => (username = text)}
      />
      <InfoBox
        placeholder={activeUser.email}
        onChangeText={text => (email = text)}
      />
      <InfoBox
        placeholder="password"
        onChangeText={text => (password = text)}
        password={true}
      />
      <InfoBox
        placeholder="password again"
        onChangeText={text => (passwordCheck = text)}
        password={true}
      />
      <Button placeholder="Save" onPress={update} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
};

export default Account;
