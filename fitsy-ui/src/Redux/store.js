import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import sickness from "./slice/sicknesses";
import doctor from "./slice/doctor";
import hospital from "./slice/hospital";
import prescription from "./slice/prescription";
import medicine from "./slice/medicine";

export const store = configureStore({
  reducer: {
    auth,
    sickness,
    doctor,
    hospital,
    prescription,
    medicine,
  },
});
