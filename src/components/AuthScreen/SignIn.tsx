import React, { useEffect, useState,FC } from "react";
import { TouchableOpacity, Button, Dimensions, TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { signInUser } from '../UserPool/SignIn';
import SignUp from "./AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import Loder from '../Loader/Loder';
import Alert from '../Alert/Alert';
import styles from "./SignInStyles";


const signIn:FC = () => {

    const [state, setState] = useState({
        email: "",
        phoneNumber: ""
    });

    const [signUp, setSignUp] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [loder, setLodaer] = useState(false);
    const [signInError, setSignInError] = useState('');
    const [alertWarning, setAlertWarning] = useState(false);

    const resetState = () => {
        setState({ email: "", phoneNumber: "" });
    };

    const onPressSignIn = () => {
        signInUser(state, setSignInSuccess, setLodaer, setSignInError);
        setLodaer(true)
        setAlertWarning(true);
    };
    const onPressSignUp = () => {
        setSignUp(true);
    };

    const onPressBackSignIn = () => {
        setSignUp(false);
    };

    const signInFalse = () => {
        setSignInSuccess(false);
        setLodaer(false);
    };

    const onPressCloseDialog = () => {
        setAlertWarning(false);
    };

    useEffect(() => {

    }, [signInError]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {signInSuccess && state.email && state.password ? <HomeScreen email={state.email} signInFalse={signInFalse} resetState={resetState} onPressCloseDialog={onPressCloseDialog}/> :
                        <>
                            {signUp ? <SignUp signUp={signUp} onPressBackSignIn={onPressBackSignIn} /> :
                                !loder ?
                                    <>
                                        <Text style={{ marginTop: 0, marginBottom: 50, fontWeight: "bold", fontSize: 30, letterSpacing: 4, color: "black", }}>Falcon</Text>

                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(input) => setState({ ...state, email: input })}
                                            value={state.email}
                                            placeholder="Enter your Email"
                                            placeholderTextColor="black"
                                        />
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(input) => setState({ ...state, password: input })}
                                            value={state.password}
                                            placeholder="Enter your password"
                                            secureTextEntry
                                            placeholderTextColor="black"
                                        />
                                        <View style={styles.signInButtonContainer}>
                                            <TouchableOpacity
                                                style={styles.signInButton}

                                                onPress={onPressSignIn}
                                            >
                                                <Text style={styles.signInBottomTitle}>SignIn</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.signInButton}
                                                onPress={onPressSignUp}
                                            >
                                                <Text style={styles.signInBottomTitle}>SignUp </Text>
                                            </TouchableOpacity>

                                        </View>
                                    </> : <Loder />
                            }
                        </>
                    }
                    {signInError && !loder ? <Alert onPressCloseDialog={onPressCloseDialog} alertWarning={alertWarning} error={signInError} /> : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default signIn;