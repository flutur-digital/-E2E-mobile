import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ingredientContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },

    ingredientInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ingredientImageBox: {
        width: 70,
        height: 70
    },

    ingredientImage: {
        width: '100%',
        height: '100%',
        // resizeMode: 'contain',
    },

    ingredientName:{
        marginLeft: 29,
        color: '#000000',
        fontSize: 22,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'left',
        fontFamily: 'Cera Pro Medium',
    },

    ingredientActions: {

    }
});

export default styles;
