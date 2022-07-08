import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: "white", flex: 1, alignItems: "center", height: windowHeight, resizeMode: 'contain', width: windowWidth, padding: 100
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
        width: 250,
        borderRadius: 6,
        color: "#20232a",
        textAlign: "center",
        // fontSize: 10,
        marginBottom: 10
    },
    signInButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        width: 290,

    },
    signInButton: {
        alignItems: "center",
        backgroundColor: "#ffff",
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        "&:hover": {
            backgroundColor: "#ea6e6e"
        },
    }
});

export default styles;