import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        paddingTop: 200,
        padding: 20,
        backgroundColor: "white", flex: 1, alignItems: "center", height: windowHeight, resizeMode: 'contain', width: windowWidth
    },
    signInBottomTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "black"
    }
    ,
    input: {
        borderWidth: 2,
        borderColor: "#20232a",
        width: 300,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        // fontSize: 10,
        marginBottom: 10
    },
    signInButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
        width: windowWidth,

    },
    signInButton: {
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 10,
        borderWidth: 1,
        borderRadius: 1,
        "&:hover": {
            backgroundColor: "#ea6e6e"
        },
    }
});

export default styles;