import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import DistributorDashboard from "./pages/distributors";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/distributors" element={<DistributorDashboard />} />
      </Routes>
    </Layout>
  );
}
