import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    alertWrapper : {
        width : '100%',
        position : 'absolute',
        bottom : 10,
        paddingLeft: 14,
        paddingRight: 14
    },
    alertBox : {
        width : '100%',
        height : 77,
        backgroundColor: '#000000',
        borderRadius : 22,
        paddingLeft : 30,
        paddingRight : 23,
        flexDirection : 'row',
        alignItems : 'center',
    },
    alertTxt : {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Cera Pro Medium',
        color : '#fff'
    },
    counter : {
        width: 34,
        height: 34,
        backgroundColor: '#ffc900',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent : 'center',
        marginLeft : 3,
        marginRight :3
    }
});

export default styles;
