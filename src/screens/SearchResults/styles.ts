import { StyleSheet } from "react-native";
import {MainColor} from "../../theme";

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        width: '100%',
        paddingLeft : 14,
        paddingRight : 15,
        position : 'relative'
    },
    scrollContainer : {
        justifyContent : 'center',
        alignItems : 'center',
    }

});

export default styles;
