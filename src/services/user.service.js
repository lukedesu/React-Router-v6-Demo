import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.REACT_APP_USERPOOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID
};

const userPool = new CognitoUserPool(poolData);

function signIn(username, password, callback) {
  localStorage.setItem("isSignedIn", "true");
  callback();
}

function signOut(callback) {
  localStorage.removeItem("isSignedIn");
  callback();
}

function isAuthenticated() {
  return localStorage.getItem("isSignedIn") === "true";
}

function getUser(callback) {
  // ... Existing code
}

const userService = {
  signIn,
  signOut,
  isAuthenticated,
  getUser
};

export default userService;

/*
class Auth {
  signIn(email, password, rememberMe, callback) {
    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: email,
      Pool: userPool,
      Storage: rememberMe ? localStorage : sessionStorage
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("onSuccess:", result);
        localStorage.setItem("isLoggedIn", "true");
        callback();
      },
      onFailure: (err) => {
        console.error(err);
        callback(err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        // const newPassword = prompt("Please enter a new password:");

        console.log("newPasswordRequired:", userAttributes, requiredAttributes);

        // cognitoUser.completeNewPasswordChallenge(
        //   newPassword,
        //   requiredAttributes,
        //   {
        //     onSuccess: (result) => {
        //       localStorage.setItem("isLoggedIn", "true");
        //       callback();
        //     },
        //     onFailure: (err) => {
        //       console.error(err);
        //       callback(err);
        //     },
        //   }
        // );
      },
    });
  }

  signOut(callback) {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
      localStorage.removeItem("isLoggedIn");
    }
    callback();
  }

  isAuthenticated() {
    const cognitoUser = userPool.getCurrentUser();
    return (
      cognitoUser !== null && localStorage.getItem("isLoggedIn") === "true"
    );
  }
}

export default new Auth();
*/
