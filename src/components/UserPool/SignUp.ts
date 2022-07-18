import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';

export const signUpUser = (state, setSignUpSuccess,setSignUpError) => {
    const poolData = {
        UserPoolId: 'us-east-1_rMWEjJxCj',
        ClientId: '44j08och78e5di0nub5ujmgvkg',
    };
    const userPool = new CognitoUserPool(poolData);

    const attributeList = [];

    const dataEmail = {
        Name: 'email',
        Value: state.email,
    };

    const dataPhoneNumber = {
        Name: 'phone_number',
        Value: state.phoneNumber,
    };

    const firstName = {
        Name: 'given_name',
        Value: state.firstName,
    };
    const lastName = {
        Name: 'family_name',
        Value: state.lastName,
    };
    const DOB = {
        Name: 'birthdate',
        Value: state.birthDate,
    };

    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    const attributeFirstName = new CognitoUserAttribute(firstName);
    const attributeLastName = new CognitoUserAttribute(lastName);
    const attributeDOB = new CognitoUserAttribute(DOB);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);
    attributeList.push(attributeDOB);

    const createdUser = userPool.signUp(state.email, state.password, attributeList, null, function (
        err,
        result
    ) {
        if (err) {
            setSignUpError(err.message || JSON.stringify(err));
            // alert(err.message || JSON.stringify(err));
            return;
        }
        let user = result.user;
       
        setSignUpSuccess('confirmSignUp');
    });
};