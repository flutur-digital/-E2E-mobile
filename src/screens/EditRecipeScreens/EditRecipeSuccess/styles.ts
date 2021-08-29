import { StyleSheet } from "react-native";
import {MainColor} from "../../../theme";

const styles = StyleSheet.create({

    contentWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 57
    },

    startBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 66,
        justifyContent: 'center',
        backgroundColor: '#fbce33',
        paddingLeft: 44,
        paddingRight: 41,
        shadowColor: '#00000099',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity:  0.4,
        shadowRadius: 7,
        elevation: 1,
        borderRadius: 7,
        marginBottom: 68
    },

    startBtnText: {
        fontSize: 30,
        fontFamily: 'Cera Pro Medium',
        color: '#ffffff',
        marginRight: 14
    },

    socialBtns: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 24
    },

    copyText: {
        color: '#ffffff',
        fontFamily: 'Cera Pro Medium',
        fontSize: 8,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center'
    },
    title : {
        fontFamily: 'Cera Pro Medium',
        color : '#fff',
        fontSize: 35,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        zIndex : 20
    },
    successIcon : {
       width : 71,
       height : 71,
        shadowColor: 'rgba(147, 147, 147, 0.14)',
        shadowOffset: { width: 9, height: 0 },
        shadowRadius: 15,
        borderColor: 'rgba(255, 255, 255, 0.33)',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 15,
        marginTop : 25,
        alignItems : 'center',
        justifyContent : 'center',
        zIndex: 20

    },
    socialTxt : {
        fontFamily: 'Cera Pro Medium',
        color : '#fff',
        fontSize: 21,
        fontWeight: '500',
        textAlign : 'center',
        marginTop: 24
    },
    socialIcons : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 16
    },
    socialBtn : {
        width : 48,
        height : 48,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,

        elevation: 3,
        borderRadius : 9.2,
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: '#fbd034'
    }
});

export default styles;
