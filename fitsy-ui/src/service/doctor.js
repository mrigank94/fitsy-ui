import axios from "axios";
import { BASE_URL } from "../constants";

export default async function fetchDoctorById(id) {
  const { data } = await axios.get(`${BASE_URL}/fitsy/api/v1/doctors/${id}`);

  return data;
}
