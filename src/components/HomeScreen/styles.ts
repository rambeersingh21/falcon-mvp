import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white", flex: 1, alignItems: "center",
        height: windowHeight, resizeMode: 'contain', width: windowWidth

    },
    signInButtonContainer: {
        flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: 0,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 20,
        height: 50,
        marginTop: 60
    },
    logoutButtonText: {
        marginLeft: 250,
        marginTop: 10,
        textAlign: "center",
        color: "blue",
        fontSize: 20,
        cursor: "pointer",
        alignItems: "center"
    },
    welconText: {
        marginBottom: 10,
        fontWeight: "bold",
        color: "black",
        fontSize: 25
    },
    divider: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        width: 400
    },
    row: { flexDirection: "row", flex: 1, },
    ambTierCon: {
        height: 30,
        flexDirection: "column",
        marginRight: -20
    },
    ambTierText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        marginRight: 80
    },
    viewProg: {
        height: 30,
        flexDirection: "column",
    },
    viewProgBlank: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    row2: { flexDirection: "row", flex: 1, marginTop: 50 },
    divider2: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        width: 400,
        marginTop: 30
    },
    pointsCont: {
        marginLeft: 5,
        height: 30,
        flexDirection: "column",
        marginRight: 10
    },
    totalPointTxt: {
        marginLeft: 20,
        marginTop: -40,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    pointTxt: {
        marginLeft: 30,
        marginTop: -15,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    activityCont: { height: 30, flexDirection: "column", marginRight: 0 },
    activityTxt: {
        marginBottom: 50,
        marginLeft: 90,
        marginTop: -40,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    },
    activityTxtBlank: {
        marginTop: -15,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    merButtonCont: {
        marginLeft: 60,
        width: 190,
        height: 30,
        flexDirection: "column",
        borderWidth: 2,
        borderRadius: 10
    },
    buttonTxt: {
        textAlign: "center",
        marginBottom: 3,
        color: "black",
        fontSize: 15,
        cursor: "pointer",
        alignItems: "center"
    },

    prodButtonCont: {
        marginRight: 200,
        marginTop: 20,
        height: 30,
        borderWidth: 2,
        borderRadius: 10,
        width: 180,
    },
    imgCont: { height: 400, marginTop: -20 },
    img: {
        width: 400,
        height: 500,
        marginLeft: 10,
        marginTop: 0
    }
});

export default styles;