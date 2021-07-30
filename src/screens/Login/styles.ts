import { StyleSheet } from "react-native";
import {SecondColor, MainColor} from "../../theme";

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor : SecondColor,
        flex : 1,
        width: '100%',

    },
    container : {
        display : 'flex',
        flexDirection : 'column',
        width: '100%',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 29,
        paddingRight : 29,
        position : 'relative'
    },
    iosBtn : {
        width : '100%',
        height : 54.7,
        borderRadius : 9.2,
        backgroundColor: "#2a2a2a",
        shadowColor: "rgba(147, 147, 147, 0.14)",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 9.2,
        shadowOpacity: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9
    },
    facebookBtn : {
        width : '100%',
        height : 54.7,
        borderRadius : 9.2,
        backgroundColor: "#134aa5",
        shadowColor: "rgba(147, 147, 147, 0.14)",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 9.2,
        shadowOpacity: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
        borderColor: '#020303',
    },
    googleBtn : {
        width : '100%',
        height : 54.7,
        borderRadius : 9.2,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(147, 147, 147, 0.14)",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 9.2,
        shadowOpacity: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 9,
        borderColor: '#020303',
    },
    whiteBtnTitle : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 19.3,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        marginLeft : 9,
        lineHeight: 37,
        marginBottom: -5
    },
    blackBtnTitle : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 19.3,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: "#000000",
        marginLeft : 9,
        lineHeight: 37,
    },
    logoBox : {
        width : 107,
        height : 107,
        marginBottom : 45,
    },
    legalBox : {
        display : 'flex',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        bottom: 45
    },
    copyTxt : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 11,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#2c2c2c',
        opacity: 0.5,
    }


});

export default styles;
