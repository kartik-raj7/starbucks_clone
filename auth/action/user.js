import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constant/user";

import axios from "axios";

export const handleloginsubmit = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/login",
      {
        Email,
        Password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("EMAIL", data.email);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const handleregistrationsubmit =
  (Email, Password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/logout",
        {
          Email,
          Password,
        },
        config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("EMAIL", data.email);
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
