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
        paddingLeft : 14,
        paddingRight : 14
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
        justifyContent: 'center'
    },
    whiteBtnTitle : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 19.3,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 37,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    }


});

export default styles;
