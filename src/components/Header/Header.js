import React from "react";
import { View,Text } from "react-native";
import styles from './Header.style';
import {useSelector} from 'react-redux';

const Header=({title})=>{
    const theme = useSelector(state=>state.theme.defaultTheme);

    return(
        <View style={[styles.container,{backgroundColor:theme.headerColor}]}><Text style={[styles.text,{color:theme.textColor}]}>{title}</Text></View>
    )
}

export default Header;