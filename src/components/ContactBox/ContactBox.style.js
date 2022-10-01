import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        height:80,
        borderWidth:0.3,
        borderRadius:10,
        color:'gray',
        display:'flex',
        flexDirection:'row',
    },
    image:{
        backgroundColor:'gray',
        height:60,
        width:60,
        borderRadius:30,
        margin:10,
    },
    textContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        marginLeft:10,
    },
    userName:{
        fontSize:20,
    },
    info:{
        fontSize:10,
    }
})