import {PixelRatio, StyleSheet} from "react-native";
import { MainColor } from "./colors";
export const Typography = StyleSheet.create({
    title: {
        fontFamily: 'Cera Pro Medium',
        fontSize: 31.5,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 36.8,
        letterSpacing: -0.95,
        color: "#000000",
        textAlign : 'center',
        marginTop : 10,
        marginBottom : 29
    },
    copyTxt : {
        fontFamily: 'Cera Pro Medium',
        fontSize: 11,
        fontWeight: '500',
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#2c2c2c',
        opacity: 0.5,
        position : 'absolute',
        bottom : 0
    }
});
