import axios from "axios";
import { BASE_URL } from "../constants";

export default async function fetchAllSicknesses() {
  const { data } = await axios.get(`${BASE_URL}/fitsy/api/v1/sicknesses`);

  return data;
}

export const deleteSicknessService = async (id) => {
  await axios.delete(`${BASE_URL}/fitsy/api/v1/sicknesses/${id}`);

  return id;
};
