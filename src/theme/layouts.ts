import { StyleSheet } from "react-native";
import { MainColor } from "./colors";
export const Layouts = StyleSheet.create({
    spaceBetween: {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'space-between',
        paddingLeft : 22,
        paddingRight : 15
    },
    PrimarySmallBtn : {
        width: 38.7,
        height: 38.7,
        shadowColor: "rgba(147, 147, 147, 0.14)",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 9.2,
        shadowOpacity: 1,
        borderRadius : 9.2,
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center'
    }
});
