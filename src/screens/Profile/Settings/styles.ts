import { StyleSheet } from "react-native";
import {MainColor} from "../../../theme";

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        width: '100%',
        paddingLeft : 15,
        paddingRight : 15,
        paddingTop: 50,
        // alignItems : 'center',
    },
    scrollContainer : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    settingsBtn : {
        width: 39,
        height : 39,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,

        elevation: 7,
        backgroundColor: '#2a2a2a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 12
    },
    userAvatar : {
        width : 94,
        height : 94,
        borderRadius: 99
    },
    userName: {
        fontFamily: 'Cera Pro Medium',
        fontSize: 31.5,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.95,
        color: "#000000",
        textAlign : 'center',
        marginTop : 4,
        lineHeight: 0,
    },
    userBio : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#8b8b8b',
        lineHeight: 0,
        marginBottom : 38,
        marginTop: 12
    },
    changePhotoTxt : {
        fontFamily: 'Cera Pro Medium',
        color : '#2b8ac1',
        fontWeight : 'bold',
        marginTop : 15,
        marginBottom:  45
    },
    settingItem : {
        width : '100%',
        flexDirection : 'row',
        marginBottom : 20,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    settingName : {
        width : '25%'
    },
    inputWrapper : {
        width : '75%',
        borderBottomWidth: 0.5,
        borderBottomColor : '#979797',
        paddingBottom : 15
    },
    name : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 18,
        fontWeight: '300',
        color : '#555555',
        marginLeft : 30
    },
    settingInput : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 18,
        fontWeight: '400',
    },
    test : {
        width : '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    logoutSection : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 15,
        marginBottom : 15,

    },
    logOutBtn : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 18,
        color : '#2b8ac1',
        fontWeight : '300',
        marginBottom : 15
    },
    deleteBtn : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 18,
        color : '#c1302c',
        fontWeight : '300',
        marginBottom : 15
    },
    title: {
        fontFamily: 'Cera Pro Medium',
        fontSize: 31.5,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 36.8,
        letterSpacing: -0.95,
        color: "#000000",
        textAlign : 'center',
    },

});

export default styles;
