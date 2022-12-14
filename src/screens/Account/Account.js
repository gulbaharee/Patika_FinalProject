import React, {useState, useCallback} from 'react';
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
import {updateUser} from '../../store/userSlice';

const Account = () => {
  //datas from redux
  const activeUser = useSelector(state => state.activeUser.loggedUser);
  const theme = useSelector(state => state.theme.defaultTheme);

  const dispatch = useDispatch();
  //firebase configs
  const db = getFirestore(app);
  const auth = getAuth(app);
  //this states for imagepicker modal
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  //update data via firebase
  const update = () => {
    if (password === passwordCheck) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async res => {
          await updateDoc(doc(db, 'users', res.user.uid), {
            username: username,
            image: uri,
          });
          dispatch(updateUser({image: uri}));
        })
        .catch(error => console.log(error));
    }
  };
  //open local library
  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
    setVisible(false);
  }, []);
  //tried to open camera, just tried:)
  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);
  //selected photo uri
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ProfilePhoto
        onPress={() => setVisible(true)}
        url={uri ? {uri} : activeUser.image}
      />
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
