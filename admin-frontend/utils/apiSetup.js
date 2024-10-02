import axios from "axios";
import { toast } from "react-toastify";
import data from "./data";
import { logoutUser, setLoading } from "../store/features/userSlice";

import { GetStaticPaths, GetStaticProps } from "next";
export let urls = {
  // test: "http://65.2.74.65:8000/api/v1",
  development: "http://localhost:8000/api",
  // development: "http://ec2-43-205-233-226.ap-south-1.compute.amazonaws.com:5000/api/v1",
  // production: "/api/v1",
};

let store;

export let injectStore = (_store) => {
  store = _store;
};

// console.log("api", process.env.NODE_ENV);

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    if (request.url !== "/message") {
      // check if the header is set
      if (!request.headers["noLoad"]) {
        store?.dispatch(setLoading(true));
      }
    }

    let token = localStorage.getItem("rotary-dubai-access-token");
    if (!token) {
      console.log("token not picked up");
    } else {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    if (!store) {
      console.log("couldn't set loading");
    } else {
      store.dispatch(setLoading(false));
    }
    return response;
  },
  (err) => {
    console.log(err);
    // check if 403
    console.log(err.response);
    if (err.response?.status === 403) {
      toast(`Aw snap! Logout and try again!`, { type: "error" });
      store?.dispatch(logoutUser());
      window.location = `/`;
    }
    if (!store) {
      console.log("couldn't set loading");
    } else {
      store.dispatch(setLoading(false));
    }
    if (err.response && err.code !== "ERR_NETWORK") {
      console.log(err.response.data);
      toast.error(err.response.data.message);
      return Promise.reject(err.response.data);
    } else if (err.request) {
      toast.error("Couldn't reach the server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", err.message);
    }
    return Promise.reject(err);
  }
);

export default api;
