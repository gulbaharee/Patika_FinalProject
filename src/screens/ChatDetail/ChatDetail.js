import React, {useEffect} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {setDoc, doc, getFirestore} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import ChatBox from '../../components/ChatBox/ChatBox';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import styles from './ChatDetail.style';
import {useNavigation} from '@react-navigation/native';
import SendBox from '../../components/SendBox/SendBox';

const ChatDetail = ({route}) => {
  const {id, firstName, lastName} = route.params;
  const {goBack} = useNavigation();
  const db = getFirestore(app);
  const theme = useSelector(state => state.theme.defaultTheme);

  //   const sendMessage =  async () => {
  //     console.log('sads');

  //     await setDoc(doc(db, 'messages', 1), {
  //       lastMsgDate: 'tomorrow',
  //     });
  //     console.log('sads');
  //   };

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header
        title={firstName + ' ' + lastName}
        goBack={true}
        onPress={() => goBack('ChatList')}
      />
      <View style={styles.messageContainer}>
        <ChatBox message="dfldf" />
      </View>
      <SendBox />
    </View>
  );
};

export default ChatDetail;
