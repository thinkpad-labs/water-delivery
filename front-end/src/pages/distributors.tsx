import { useState } from "react";
import {
  Plus,
  Truck,
  Store,
  DollarSign,
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { StatCard } from "../components/statCard";
import { StatusBadge } from "../components/statusBadge";
import type { Distributor } from "../types/distributors";

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
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-right">Dues</th>
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
  );
}
