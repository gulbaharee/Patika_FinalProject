import React, {useEffect} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {setDoc, doc, getFirestore} from 'firebase/firestore';
import {app} from '../../utils/firebase';
import ChatBox from '../../components/ChatBox/ChatBox';
import {useSelector} from 'react-redux';
import styles from './ChatDetail.style';

const ChatDetail = () => {
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
      <ChatBox message="dfldf" />
    </View>
  );
};

export default ChatDetail;
