import {
  LayoutDashboard,
  Truck,
  BarChart3,
  MessageSquare,
  FileText,
  LogOut,
  User,
} from "lucide-react";
import { NavItem } from "./navItem";

export default function NavBar() {
  return (
    <>
      <aside className="w-20 md:w-64 bg-white border-l border-slate-200 flex flex-col justify-between py-6 px-3 md:px-4 z-20 shrink-0 shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-6">
          <div className="hidden md:block px-4">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              صفحات الإدارة
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <NavItem icon={LayoutDashboard} label="نظرة عامة" to="#" />
            <NavItem
              icon={Truck}
              label="الموزعين"
              to="/distributors"
              active={location.pathname === "/distributors"}
            />
            <NavItem
              icon={BarChart3}
              label="الحليلات"
              to="#"
              active={location.pathname === "/"}
            />
            <NavItem
              icon={User}
              label="المستخدمين"
              to="#"
              active={location.pathname === "/"}
            />
            <NavItem
              icon={MessageSquare}
              label="الرسائل"
              to="#"
              badge={3}
              active={location.pathname === "/"}
            />
            <NavItem
              icon={FileText}
              label="التقارير"
              to="#"
              active={location.pathname === "/"}
            />
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="md:hidden flex justify-center">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          <button className="hidden md:flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-4 bg-slate-100 hover:bg-red-50 hover:text-red-600 transition-colors text-slate-900 text-sm font-bold">
            <LogOut className="w-5 h-5" />
            <span>تسجيل خروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
