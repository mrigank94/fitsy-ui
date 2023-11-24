import axios from "axios";
import { BASE_URL } from "../constants";

export const loginService = async (loginData) => {
  const { data } = await axios.post(
    `${BASE_URL}/fitsy/api/v1/auth/signin`,
    loginData
  );

  return data;
};
