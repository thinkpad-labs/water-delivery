import { Outlet } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/navBar";

export default function Layout() {
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-100">
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
          <Header />
          <Outlet />
        </div>
        <NavBar />
      </div>
    </>
  );
}
