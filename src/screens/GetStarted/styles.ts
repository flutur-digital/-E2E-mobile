import { StyleSheet } from "react-native";
import {MainColor} from "../../theme";

const styles = StyleSheet.create({
    backgroundVideo: {
        height: '100%',
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },

    contentWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },

    startBtn: {
        height: 199,
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        shadowOffset: { width: 16, height: 0 },
        shadowRadius: 21,
        borderColor: '#020303',
        borderStyle: 'solid',
        borderWidth: 0,
        backgroundColor: MainColor,
    }
});

export default styles;
