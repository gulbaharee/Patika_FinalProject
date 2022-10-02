import React from "react";
import {View,Text} from 'react-native';
import Header from '../../components/Header/Header';
import ContactBox from "../../components/ContactBox/ContactBox";
import { useSelector } from "react-redux";

const Contacts=()=>{
    const theme = useSelector(state=>state.theme.defaultTheme);
    return(
        
        <View>
            <Header title='Contacts'/>
            <ContactBox username="Sena Sila Kilinç" info="son görülme 1 saat önce"/>
        </View>
    )
}

export default Contacts;