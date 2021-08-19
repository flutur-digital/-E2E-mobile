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
  selectBtn : {
        width: 24,
        height: 24,
        position : 'absolute',
        top : 13,
        right : 15,
        zIndex : 20
    }
});

export default styles;
