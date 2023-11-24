import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Medicine from "./Pages/Medicine";
import Doctor from "./Pages/Doctor";
import Hospital from "./Pages/Hospital";
import Prescription from "./Pages/Prescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/prescriptions/:id" element={<Prescription />} />
      <Route path="/medicines/:id" element={<Medicine />} />
      <Route path="/hospitals/:id" element={<Hospital />} />
      <Route path="/doctors/:id" element={<Doctor />} />
    </Routes>
  );
}

export default App;
