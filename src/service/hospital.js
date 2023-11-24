import axios from "axios";
import { BASE_URL } from "../constants";

export default async function fetchHospitalById(id) {
  const { data } = await axios.get(`${BASE_URL}/fitsy/api/v1/hospitals/${id}`);

  return data;
}
