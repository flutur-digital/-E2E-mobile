import { StyleSheet } from "react-native";
import {MainColor} from "../../theme";

const styles = StyleSheet.create({
    backgroundVideo: {
        height: '100%',
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },

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
    }
});

export default styles;
