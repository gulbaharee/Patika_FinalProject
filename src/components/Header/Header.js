import React from "react";
import { View,Text } from "react-native";
import styles from './Header.style';

const Header=({title})=>{
    return(
        <View style={styles.container}><Text style={styles.text}>{title}</Text></View>
    )
}

export default Header;