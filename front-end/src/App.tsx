import { useState } from "react";
import {
  Settings,
  Zap,
  Plus,
  Truck,
  Store,
  DollarSign,
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BarChart3,
  FolderOpen,
  MessageSquare,
  FileText,
  LogOut,
} from "lucide-react";
import { NavItem } from "./components/navItem";
import { StatCard } from "./components/statCard";
import { StatusBadge } from "./components/statusBadge";
import type { Distributor } from "./types/distributors";

const distributors: Distributor[] = [
  {
    id: "#DIST-001",
    name: "Apex Distributors Inc.",
    initials: "AD",
    storeName: "MegaMart Central",
    region: "North America",
    status: "Active",
    dues: 12450.0,
    colorFrom: "from-blue-100",
    colorTo: "to-blue-200",
    textColor: "text-blue-600",
  },
  {
    id: "#DIST-004",
    name: "Global Supplies Ltd.",
    initials: "GS",
    storeName: "Tech Haven",
    region: "Europe",
    status: "Active",
    dues: 8200.5,
    colorFrom: "from-purple-100",
    colorTo: "to-purple-200",
    textColor: "text-purple-600",
  },
  {
    id: "#DIST-012",
    name: "Fast Delivery Co.",
    initials: "FD",
    storeName: "QuickShop 24/7",
    region: "Asia Pacific",
    status: "Overdue",
    dues: 3850.0,
    colorFrom: "from-orange-100",
    colorTo: "to-orange-200",
    textColor: "text-orange-600",
  },
  {
    id: "#DIST-023",
    name: "North Logistics",
    initials: "NL",
    storeName: "SuperStore #45",
    region: "North America",
    status: "Pending",
    dues: 0.0,
    colorFrom: "from-indigo-100",
    colorTo: "to-indigo-200",
    textColor: "text-indigo-600",
  },
];

// page
export default function DistributorDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100">
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-5 border-b border-slate-200 bg-white/80 backdrop-blur-md z-10 sticky top-0">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative group cursor-pointer">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center border-2 border-transparent group-hover:border-blue-600 transition-all duration-300"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvRgkJ14te01TVPVL5vr-6ax5XT2WgRy3YFZWaqz8VSV9BFqh4R3Y-xPtE_nU3p6Zfa5sWy0sOFU9Zx4HrJlUYo1fbzf4zCA4O4As6DHo7JWN5gvSE6NylxqVjyq2BaApViQ-x9EfD15Np_Uxd9ifo9Enka3MG93YtvlMrHM-WEkiDtLaiWFEGjRUhqmHATj479nYqPo9YMSPvwFUnPJ5nIeuQ4tZlJwKvVOYn5HvS_gTwNH7_v2ZFCHz-mxCcfYMvStMHoPv8d1A')",
                }}
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full border-2 border-white"></div>
            </div>
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-200">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="text-slate-900 text-base sm:text-xl font-bold tracking-tight hidden sm:block">
              Dashboard App
            </h2>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Page Header */}
          <div className="flex flex-col gap-3 sm:gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-blue-600"></span>
              </span>
              <span className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Live Updates
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
              <div>
                <h1 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Distributors Overview
                </h1>
                <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-1 sm:mt-2">
                  Manage your distribution network, view dues, and track store
                  performance.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2 w-full sm:w-auto">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Distributor
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <StatCard
              icon={Truck}
              label="Total Distributors"
              value="128"
              badge="+4 New"
              badgeColor="text-emerald-600 bg-emerald-50"
            />
            <StatCard
              icon={Store}
              label="Active Stores"
              value="1,840"
              badge="+12%"
              badgeColor="text-emerald-600 bg-emerald-50"
            />
            <StatCard
              icon={DollarSign}
              label="Outstanding Dues"
              value="$24,500"
              badge="2 Overdue"
              badgeColor="text-rose-600 bg-rose-50"
            />
          </div>

          {/* Distributors Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-slate-900 text-base sm:text-lg font-bold">
                Distributors List
              </h3>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search distributors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 pr-4 py-2 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-600/20 w-full sm:w-64 text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-160">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200 text-xs uppercase text-slate-600 font-bold tracking-wider">
                    <th className="px-4 sm:px-6 py-3 sm:py-4">
                      Distributor Name
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Store Name</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Region</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Status</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                      Dues
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {distributors.map((dist) => (
                    <tr
                      key={dist.id}
                      className="group hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br ${dist.colorFrom} ${dist.colorTo} flex items-center justify-center ${dist.textColor} font-bold text-xs shrink-0`}
                          >
                            {dist.initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-slate-900 text-sm sm:text-base truncate">
                              {dist.name}
                            </p>
                            <p className="text-xs text-slate-600">
                              ID: {dist.id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600 font-medium text-sm">
                        {dist.storeName}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600 text-sm">
                        {dist.region}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <StatusBadge status={dist.status} />
                      </td>
                      <td
                        className={`px-4 sm:px-6 py-3 sm:py-4 text-right font-bold text-sm ${
                          dist.status === "Overdue"
                            ? "text-rose-600"
                            : "text-slate-900"
                        }`}
                      >
                        ${dist.dues.toFixed(2)}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                        <button className="text-slate-600 hover:text-blue-600 transition-colors">
                          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
              <span className="text-xs text-slate-600 text-center sm:text-left">
                Showing 4 of 128 distributors
              </span>
              <div className="flex gap-2">
                <button
                  disabled
                  className="p-1.5 sm:p-1 rounded hover:bg-slate-100 text-slate-600 disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-1.5 sm:p-1 rounded hover:bg-slate-100 text-slate-600">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-l border-slate-200 flex flex-col justify-between py-6 px-3 md:px-4 z-20 shrink-0 shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-6">
          <div className="hidden md:block px-4">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
              Navigation
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <NavItem icon={LayoutDashboard} label="Overview" />
            <NavItem icon={Truck} label="Distributors" active />
            <NavItem icon={BarChart3} label="Analytics" />
            <NavItem icon={FolderOpen} label="Projects" />
            <NavItem icon={MessageSquare} label="Messages" badge={3} />
            <NavItem icon={FileText} label="Reports" />
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
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
