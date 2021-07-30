import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    recipeBox: {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        backgroundColor: "#ffffff",
        shadowColor: "rgba(147, 147, 147, 0.14)",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 9.2,
        shadowOpacity: 1,
        borderRadius : 20,
        marginBottom : 10

    },

    wrapper : {
        width : '100%',
        flex : 1,
        paddingTop : 20,
        paddingLeft: 20,
        paddingRight : 32,
        display : 'flex',
        flexDirection : 'column'
    },
    recipeImage : {
        shadowColor: "rgba(0, 0, 0, 0.29)",
        shadowOffset: {
            width: 0,
            height: 11.7
        },
        shadowOpacity: 1,
        height : 150,
        width : 150,
        borderBottomLeftRadius : 20,
        borderTopLeftRadius : 20,
    },
    recipeTitle : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 23.7,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 23.3,
        letterSpacing: -0.71,
        textAlign: "left",
        color: "#000000"
    },
    recipeInfoAlign : {
        width : '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 18
    },
    timeInfo : {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center'
    },
    timeTxt : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 23.3,
        letterSpacing: -0.45,
        textAlign: "left",
        color: "#000000",
        marginLeft : 5.7
    }
});

export default styles;
