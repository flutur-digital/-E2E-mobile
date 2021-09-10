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
        width : '100%',
        flex : 1,
        alignItems : 'center',
        flexDirection : 'column'
    },
    addRecipeBox : {
        // width: '100%',
        // flex : 1,
        // height : 200,
        flexDirection : 'column',
        justifyContent : 'space-between',
        paddingTop : 20,
        paddingLeft: 21,
        paddingRight: 18,
        paddingBottom : 33,
        shadowColor: 'rgba(147, 147, 147, 0.14)',
        shadowOffset: { width: 9, height: 0 },
        shadowRadius: 9,
        backgroundColor : '#fff',
        borderRadius : 25,
        marginTop: 13,
        marginBottom: 20,

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
    },
    stepAlign : {
        display : 'flex',
        width : '100%',
        alignItems: 'center',
        flexDirection : 'row',
    },
    stepBox : {

        width: 29,
        height: 29,
        backgroundColor: '#ffca00',
        borderRadius: 99,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 5,
        marginTop: 5,
    },
    step : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 17,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 22.4,
        color : '#fff'
    },
    contentTxt : {
        width  : '100%',
        fontFamily: 'Cera Pro Medium',
        color: '#8b8b8b',
        fontSize: 17,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 22.4,
        flex : 1,
    },
    recipeAddButtons : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop : 18,
        borderTopWidth: 0.5,
        borderTopColor: '#d0d0d0'
    }

});

export default styles;
