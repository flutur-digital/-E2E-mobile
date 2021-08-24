import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    title: {
        fontFamily: 'Cera Pro Medium',
        fontSize: 31.5,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 36.8,
        letterSpacing: -0.95,
        color: "#000000",
        textAlign : 'center',
    },
    description : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 15,
        fontWeight: '500',
        color: '#8b8b8b',
        textAlign:  'center',
        marginTop : 25,
        marginBottom : 14
    },
    container : {
        display : 'flex',
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        paddingLeft : 15,
        paddingRight : 15,
        height : '100%',
        flex : 1,
    },
    addRecipeBox : {
        width: '100%',
        paddingTop : 20,
        paddingLeft: 21,
        paddingRight: 18,
        paddingBottom : 7,
        shadowColor: 'rgba(147, 147, 147, 0.14)',
        shadowOffset: { width: 9, height: 0 },
        shadowRadius: 9,
        backgroundColor : '#fff',
        borderRadius : 25,
        marginTop: 13,
        height : '100%',
        flex : 1,
        marginBottom: 16

    },
    recipeFooter : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row'
    },
    smallRecipeImage : {
        width : 139,
        height : 103,
        borderRadius : 25
    },
    addRecipeImage : {
        width : 139,
        height : 103,
        borderRadius : 25,
        flexDirection: 'row',
        backgroundColor: '#ececec',
        justifyContent : 'center',
        alignItems: 'center'
    },
    userInfo : {
        width : '100%',
        flex : 1,
        flexDirection : 'column',
        marginLeft : 22
    },

    name : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 24,
        fontWeight: '500',
        fontStyle: 'normal',
        // color: '#cacaca',
        paddingBottom : 11,
        height : 55
    },
    timeBlock : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : 30,
        borderTopWidth : 0.5,
        borderTopColor : 'rgba(139,139,139,0.51)',
    },
    preparationTime : {
        flexDirection : 'row',
        alignItems : 'center',
    }

});

export default styles;
