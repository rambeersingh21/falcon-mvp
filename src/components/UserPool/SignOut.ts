import {
    CognitoUserPool,
    CognitoUser,
} from 'amazon-cognito-identity-js';

import { LoginSuccess } from '../../redux/actions/Login/Login';
import store from '../../store/store';

export const signOutUser = (email) => {
    const poolData = {
        UserPoolId: 'us-east-1_rMWEjJxCj',
        ClientId: '44j08och78e5di0nub5ujmgvkg',
    };
    const userPool = new CognitoUserPool(poolData);

    var userData = {
        Username: email,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    store.dispatch(LoginSuccess(false));

    cognitoUser.signOut();
};