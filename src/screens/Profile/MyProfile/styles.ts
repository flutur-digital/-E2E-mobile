import { StyleSheet } from "react-native";
import {MainColor} from "../../../theme";

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        width: '100%',
        paddingLeft : 14,
        paddingRight : 15,
        position : 'relative'
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
        width : 108,
        height : 108,
        borderRadius: 99,
        display : 'flex'
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
    test : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }

});

export default styles;
