import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './ContactBox.style';

const ContactBox =({username,info})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.userName} >{username}</Text>
                <Text style={styles.info} >{info}</Text>
            </View>
        </View>
    )
}

export default ContactBox;