import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   ingredientWrapper : {
       display : 'flex',
       width : 100,
       flexDirection : 'column',
       alignItems : 'center',
       justifyContent : 'center'
   },
   ingredientImage : {
       width: 80,
       height : 60,
       resizeMode : 'cover'
   },
   ingredientName : {
       fontFamily: 'Cera Pro Medium',
       fontSize: 16,
       fontWeight: '500',
       color: '#555555',
       marginTop : 7
   },
    isChecked : {
        width: 24,
        height: 24,
        backgroundColor: '#00e96b',
        borderRadius : 5,
        position : 'absolute',
        top : 13,
        right : 15,
        zIndex : 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notChecked : {
        width: 24,
        height: 24,
        backgroundColor: '#00000020',
        borderRadius : 5,
        position : 'absolute',
        top : 13,
        right : 15,
        zIndex : 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
