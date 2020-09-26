import defaultUser from '../Utils/DefaultUser';

import ApiAuth from "../Services/Auth";
import ApiPrivate from "../Services/ApiPrivate";

export async function signIn(userid, password) {
  try {
    // Send request
    const res = await ApiAuth.authRequest({userid,password});
    const response = await res.data;
  
    const str = response.token;
    const token = str.slice(7); 
    localStorage.setItem("token", token);
    localStorage.setItem("id", response.user.userid);
    localStorage.setItem("name", response.user.name);

    return {
      isOk: true,
      data: response.user
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser(id) {
  try {
    // Send request
    const res = await ApiPrivate.getUsers(id);
    const response = await res.data;

    return {
      isOk: true,
      data: response.result
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  };
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
