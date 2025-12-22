import { Link } from "react-router-dom";
import type { NavItemProps } from "../types/navItem";

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  badge,
  active = false,
  to,
}) => (
  <Link
    to={to}
    className={`flex items-center gap-4 px-3 md:px-4 py-3 rounded-full transition-all group relative overflow-hidden ${
      active
        ? "bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
    }`}
  >
    {active && (
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
    )}
    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    <span
      className={`text-sm hidden md:block ${
        active ? "font-bold" : "font-medium"
      }`}
    >
      {label}
    </span>
    {badge && (
      <span className="hidden md:flex ml-auto h-5 w-5 bg-blue-600 text-white text-xs font-bold items-center justify-center rounded-full">
        {badge}
      </span>
    )}
  </Link>
);
