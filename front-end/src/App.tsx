import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import DistributorDashboard from "./pages/distributors";
import Home from "./pages/home";
import SignUp from "./pages/signUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path="/distributors" element={<DistributorDashboard />} />
      </Route>
    </Routes>
  );
}
