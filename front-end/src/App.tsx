import { Routes, Route } from "react-router-dom";
import Layout from "./pages/distributers/layout";
import DistributorDashboard from "./pages/distributers/distributors";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import DistributorsForm from "./pages/distributers/distributorsForm";
import UserType from "./pages/userType";
import DistributorsDetials from "./pages/distributersDetails";
import ConsumersDetails from "./pages/consumersDetails";
import DistributersManagementDashboard from "./pages/distributerDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-type" element={<UserType />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/distributers-details" element={<DistributorsDetials />} />
      <Route path="/consumers-details" element={<ConsumersDetails />} />
      <Route
        path="/distributers-dashboard"
        element={<DistributersManagementDashboard />}
      />

      <Route element={<Layout />}>
        <Route path="/distributors" element={<DistributorDashboard />} />
        <Route path="/new-distributor" element={<DistributorsForm />} />
      </Route>
    </Routes>
  );
}
