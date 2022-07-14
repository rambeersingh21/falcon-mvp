import React, { useState ,FC} from "react";
import { TouchableOpacity, Dimensions, ScrollView, TextInput, StyleSheet, Text, View, Alert } from "react-native";
import { signUpUser } from '../UserPool/SignUp';
import SignUpConfirm from './SignUpConfirm';
import SignInScreen from './SignIn';
import AlertDialog from '../Alert/Alert';
import styles from './SignUpStyles';



const SignUp:FC<any> = (props) => {
    const [alertWarning, setAlertWarning] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: ""
    });
    const [signUpSuccess, setSignUpSuccess] = useState('');
    const [signUpError, setSignUpError] = useState('');

    const resetState = () => {
        setState({ email: "", password: "", firstName: "", lastName: "", phoneNumber: "" });
    };

    const onPressSignIn = () => {
        Alert.alert("Functionality not develop yet");
    };
    const onPressSignUp = () => {
        props.onPressSignUp();
    };

    const onPressBackSignIn = () => {
        props.onPressBackSignIn();
    };

    const onPressCreateAccount = () => {
        signUpUser(state, setSignUpSuccess, setSignUpError);
        setAlertWarning(true);
    };

    const onPressAlertClose = () => {
        setSignUpSuccess("");
    };

    const onPressCloseDialog = () => {
        setAlertWarning(false);
    };

    return (
        <View >
            <View style={styles.container}>

                {signUpSuccess ?
                    <SignUpConfirm state={state} onPressBackSignIn={onPressBackSignIn} /> :
                    <>
                        {props.signUp ?
                            <>
                                <Text style={{ marginTop: -50, marginBottom: 20, fontWeight: "bold", fontSize: 30, letterSpacing: 4, color: "black", }}>Falcon</Text>


                                <TextInput
                                    style={styles.input}
                                    onChangeText={(input) => setState({ ...state, firstName: input })}
                                    value={state.firstName}
                                    placeholder="First Name"
                                    placeholderTextColor="black"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(input) => setState({ ...state, lastName: input })}
                                    value={state.lastName}
                                    placeholder="Last Name"
                                    placeholderTextColor="black"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(input) => setState({ ...state, phoneNumber: input })}
                                    value={state.phoneNumber}
                                    placeholder="Phone Number"
                                    placeholderTextColor="black"
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(input) => setState({ ...state, birthDate: input })}
                                    value={state.birthDate}
                                    placeholder="Enter your birthDate DD/MM/YYYY"
                                    placeholderTextColor="black"
                                />
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
                                    <>
                                        <TouchableOpacity
                                            style={styles.signInButton}
                                            onPress={onPressCreateAccount}
                                        >
                                            <Text style={styles.signInBottomTitle}>Create Account</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.signInButton}
                                            onPress={onPressBackSignIn}
                                        >
                                            <Text style={styles.signInBottomTitle}>Back to SignIn</Text>
                                        </TouchableOpacity>
                                    </>
                                </View>
                            </> :
                            <SignInScreen onPressSignUp={onPressSignUp} onPressBackSignIn={onPressBackSignIn} />
                        }
                    </>
                }
                {signUpError ? <AlertDialog onPressCloseDialog={onPressCloseDialog} alertWarning={alertWarning} error={signUpError} /> : null}
            </View>
        </View>

    );
};


export default SignUp;