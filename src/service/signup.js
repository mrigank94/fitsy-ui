import axios from "axios";
import { BASE_URL } from "../constants";

export const signupService = async (signupData) => {
  const { data } = await axios.post(
    `${BASE_URL}/fitsy/api/v1/auth/signup`,
    signupData
  );

  return data;
};
