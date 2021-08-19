import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    recipeBox : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        borderRadius : 15,
        marginTop : 20,
        backgroundColor : '#fff'
    },
    recipeImage : {
        width: '100%',
        height : 298,
        borderTopLeftRadius : 15,
        borderTopRightRadius : 15
    },
    title : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 30,
        fontWeight: '500',
        color : '#000',
        fontStyle: 'normal',
        textAlign: 'center',
        marginBottom : 20,
        lineHeight: 35.29,
    },
    recipeContentTxt : {
        width : '100%',
        paddingLeft : 22,
        paddingRight : 22,
        paddingBottom : 21,
        paddingTop : 21,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'flex-start'

    },
    test : {
        flex : 1,

    },
    recipeTitleWrapper : {
        flex : 1,
        width : '100%',
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 26,
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection: 'column'


    },
    timeBlock : {
        width : '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeTxt : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#8b8b8b',
        // lineHeight: 22.4,

    },
    stepBox : {

        width: 29,
        height: 29,
        backgroundColor: '#ffca00',
        borderRadius: 99,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 5
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
        fontFamily: 'Cera Pro Medium',
        color: '#8b8b8b',
        fontSize: 17,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 22.4,
        flex : 1,

    },
    recipeMedia : {
        width : '100%',
        resizeMode : 'contain',
        height : 250
    },
    recipeFooter : {
        width : '100%',
        paddingLeft : 20,
        paddingRight : 23,
        marginTop: 40,
        paddingBottom: 23,
        display : 'flex',
        flexDirection : 'row'
    },
    smallRecipeImage : {
        width : 118,
        height : 118,
        borderRadius : 25
    },
    userInfo : {
        width : '100%',
        flex : 1,
        flexDirection : 'column',
        marginLeft : 18
    },
    role : {
        fontFamily: 'Cera Pro Medium',
        color: '#8b8b8b',
        fontSize: 12,
        lineHeight: 19.1,
        fontStyle: 'normal',
    },
    name : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    followBlock : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : 8,
        borderTopWidth : 0.5,
        borderTopColor : 'rgba(139,139,139,0.51)',

        marginTop : 10
    },
    followBtn : {
        paddingLeft : 7,
        paddingTop : 7,
        paddingBottom : 7,
        paddingRight: 19,
        borderWidth: 1,
        borderColor: '#ffca00',
        borderRadius : 25,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center'
    },

    followBtnActive : {
        paddingLeft : 7,
        paddingTop : 7,
        paddingBottom : 7,
        paddingRight: 19,
        borderWidth: 1,
        backgroundColor: '#ffca00',
        borderColor: '#ffca00',
        borderRadius : 25,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center'
    },
    userAvatar : {
        width : 34,
        height : 34,
        borderRadius : 99,
        marginRight: 10
    },
    followTxt : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
    },

    followTxtActive : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        fontStyle: 'normal',
    },
    likesCount : {
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent : 'center'
    }
});

export default styles;
