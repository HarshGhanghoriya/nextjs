import axios from "axios";
import api from "./Axios";

export const saveContactDetail = async (payload) => {
  const res = await api.post("/Contact_Us/", payload);
  return res?.data;
};

export const saveNewsLetterDetails = async (payload) => {
  const res = await api.post("/subscribe/", payload);
  return res?.data;
};

export const storeCustomSolutionDetails = async (payload) => {
  const res = await api.post("/custom/manufactoring/", payload);
  return res?.data;
};

export const Contact_Us_FormDetails = async (payload) => {
  const res = await api.post("api/contact_us/", payload);
  return res?.data;
};
export const Request_Sample_FormDetails = async (payload) => {
  const res = await api.post("api/custom-manufactoring/", payload);
  return res;
};

export const GetState = async (payload) => {
  const countryCode = "IN";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  try {
    const res = await api.get(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
      {
        headers: {
          "X-CSCAPI-KEY": apiKey,
          // Add other headers if needed
        },
        // Include payload as parameters for a GET request
      }
    );
    return res?.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching state data:", error);
    throw error; // You may want to throw the error for the calling code to handle
  }
};
export const GetCity = async (payload) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const countryCode = "IN";
  try {
    const res = await api.get(
      `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${payload}/cities`,
      {
        headers: {
          "X-CSCAPI-KEY": apiKey,
          // Add other headers if needed
        },
        // Include payload as parameters for a GET request
      }
    );
    return res?.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching state data:", error);
    throw error; // You may want to throw the error for the calling code to handle
  }
};



