import React, { useEffect, useState, FC } from "react";
import { TouchableOpacity, Button, Dimensions, TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { signInUser } from '../UserPool/SignIn';
import SignUp from "./AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import Loder from '../Loader/Loder';
import Alert from '../Alert/Alert';
import styles from "./SignInStyles";
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth, sectionHeader } from 'aws-amplify';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signIn: FC = () => {

    const [state, setState] = useState({
        email: "",
        phoneNumber: "",
        password: ""
    });

    const [signUp, setSignUp] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [loder, setLodaer] = useState(false);
    const [signInError, setSignInError] = useState('');
    const [alertWarning, setAlertWarning] = useState(false);
    const [visible, setVisible] = useState(false);
    const [vCode, setVCode] = useState('');

    const resetState = () => {
        setState({ email: "", phoneNumber: "" });
    };

    // const setCognitoUser = (user) => {
    //     console.log(user)
    // };

    const onPressSignIn = () => {
        signInUser(state, setSignInSuccess, setLodaer, setSignInError, setVisible);
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
        // if(cognitoUser){
        //     cognitoUser(vCode);
        // }
        console.log(vCode)
        async () => {
            await AsyncStorage.removeItem("vCode");
            await AsyncStorage.setItem("vCode", vCode);
        }
    }, [signInError, vCode]);

    // const getVerificationCode=(code)=>{
    //     console.log("signIN pa",code);
    //     setVCode(code);
    //     return code;
    // }
    const onPressCancel = () => {
        setVisible(false);
        setLodaer(false);
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {signInSuccess && state.email && state.password ? <HomeScreen email={state.email} signInFalse={signInFalse} resetState={resetState} onPressCloseDialog={onPressCloseDialog} /> :
                        <>
                            {signUp ? <SignUp signUp={signUp} onPressBackSignIn={onPressBackSignIn} /> :
                                !loder ?
                                    <>
                                        <Text style={{ marginBottom: 50, fontWeight: "bold", fontSize: 50, letterSpacing: 4, color: "black", }}>Falcon</Text>

                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(input) => setState({ ...state, email: input })}
                                            value={state.email}
                                            placeholder="Enter mobile number Or email"
                                            placeholderTextColor="black"
                                        />
                                        {/* <TextInput
                                            style={styles.input}
                                            onChangeText={(input) => setState({ ...state, password: input })}
                                            value={state.password}
                                            placeholder="Enter your password"
                                            secureTextEntry
                                            placeholderTextColor="black"
                                        /> */}
                                        <View style={styles.signInButtonContainer}>
                                            <TouchableOpacity
                                                style={styles.signInButton}

                                                onPress={onPressSignIn}
                                            >
                                                <Text style={styles.signInBottomTitle}>Sign In</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.signInButton}
                                                onPress={onPressSignUp}
                                            >
                                                <Text style={styles.signInBottomTitle}>Create Account </Text>
                                            </TouchableOpacity>

                                        </View>
                                    </> : <Loder />
                            }
                        </>
                    }
                    {signInError && !loder ? <Alert onPressCloseDialog={onPressCloseDialog} alertWarning={alertWarning} error={signInError} /> : null}
                    <Dialog.Container visible={visible}>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                            Do you want to delete this account? You cannot undo this action.
                        </Dialog.Description>
                        <Dialog.Input onChangeText={text => setVCode(text)} />
                        <Dialog.Button label="Cancel" onPress={() => onPressCancel()} />
                    </Dialog.Container>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default signIn;