import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import ContactBox from '../../components/ContactBox/ContactBox';
import {useDispatch, useSelector} from 'react-redux';
import {collection, doc, getDocs, getFirestore} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import {useNavigation} from '@react-navigation/native';
import {setContacts} from '../../store/contactSlice';

const Contacts = () => {
  const theme = useSelector(state => state.theme.defaultTheme);
  const contacts = useSelector(state => state.contacts.contactList);
  const activeUser = useSelector(state => state.activeUser.loggedUser);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  //firestore configuration
  const db = getFirestore(app);

  //this method get datas from firestore for contaclist
  const getContacts = async () => {
    const contactlist = await getDocs(collection(db, 'users'));
    contactlist.forEach(doc => {
      if (doc.data().id != activeUser.id) {
        dispatch(setContacts(doc.data()));
      }
    });
  };

  const goChatDetail = (id, firstName, lastName, currentUser) => {
    navigate('ChatDetail', {id, firstName, lastName, currentUser});
  };

  useEffect(() => {
    getContacts();
  }, []);

  const renderContacts = ({item}) => {
    return (
      <ContactBox
        username={item.firstName + ' ' + item.lastName}
        info="son görülme 1 saat önce"
        onPress={() =>
          goChatDetail(item.id, item.firstName, item.lastName, activeUser.id)
        }
      />
    );
  };

  return (
    <View>
      <Header title="Contacts" />
      <FlatList data={contacts} renderItem={renderContacts} />
    </View>
  );
};

export default Contacts;
