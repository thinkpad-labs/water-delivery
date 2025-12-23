import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import DistributorDashboard from "./pages/distributors";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import DistributorsForm from "./pages/distributorsForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path="/distributors" element={<DistributorDashboard />} />
        <Route path="/new-distributor" element={<DistributorsForm />} />
      </Route>
    </Routes>
  );
}
