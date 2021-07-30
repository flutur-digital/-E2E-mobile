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
        // marginRight : 5
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

    },
    recipeMedia : {
        width : '100%',
        resizeMode : 'contain',
        height : 250
    }
});

export default styles;
