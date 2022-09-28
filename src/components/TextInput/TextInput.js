import React from "react";
import {TextInput,View} from 'react-native';
import styles from './TextInput.style';

const Input =({placeholder,onChangeText})=>{

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
        </View>
    )
}

export default Input;

