import axios from "axios";
import { BASE_URL } from "../constants";

export default async function fetchPrescriptionById(id) {
  const { data } = await axios.get(
    `${BASE_URL}/fitsy/api/v1/prescriptions/${id}`
  );

  return data;
}
