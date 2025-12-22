import type { ReactNode } from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex h-screen w-full overflow-hidden bg-slate-100">
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
          <Header />
          {children}
        </div>
        <NavBar />
      </div>
    </>
  );
}
