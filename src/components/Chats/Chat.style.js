import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        height:80,
        borderRadius:10,
        borderColor:'gray',
        borderWidth:0.3,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'gray',
        margin:10,
    },
    username:{
        fontSize:20,
    },
    message:{
        fontSize:12,
    },
    textContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:15,
        width:250,
    },
    date:{
        fontSize:10,
        marginRight:20,
        marginTop:30,
    }

})