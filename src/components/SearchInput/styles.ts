import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchInputContainer: {
        width: '100%',
        borderBottomColor: '#b7b7b7',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        position: 'relative'
    },

    inputBox: {
        width: '100%',
        paddingBottom: 14,
        paddingLeft: 35,
        color: '#c4c4c4',
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',
        fontFamily: 'Cera Pro Medium',
    },

    searchIcon: {
        position: 'absolute',
        left: 5
    },

    deleteIcon: {
        position: 'absolute',
        right: 5
    }
});

export default styles;
