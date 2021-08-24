import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rowContent: {
        position: 'relative',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 2,
        height : 150,
    },

    editBtn: {
        width: 80,
        height: 75,
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },

    editBtnText: {
        color: '#2a2a2a',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        fontFamily: 'Cera Pro Medium'
    },

    deleteBtn: {
        position: 'absolute',
        bottom: 0,
        width: 80,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    deleteBtnText: {
        color: '#ff2828',
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        fontFamily: 'Cera Pro Medium'
    }
});

export default styles;
