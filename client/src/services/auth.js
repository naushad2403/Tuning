import axios from "axios";
import { END_POINTS } from "./domain";

export const getPasswordCode = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.forgetPassword}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e,
    };
  }
};

export const resetPassword = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.resetPassword}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e,
    };
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.login}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e?.response?.data,
    };
  }
};

export const signup = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.signup}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e?.response?.data,
    };
  }
};

export const confirmSignup = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.singupCode}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e,
    };
  }
};

export const resendConfirmationCode = async (body) => {
  try {
    const response = await axios.post(`${END_POINTS.singupCode}`, body);
    if (response?.data) {
      return {
        data: response.data,
        error: false,
      };
    }
  } catch (e) {
    return {
      error: true,
      data: e,
    };
  }
};
