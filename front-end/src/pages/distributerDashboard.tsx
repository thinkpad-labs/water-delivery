import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  HelpCircle,
  ChevronRight,
  Plus,
  Search,
  ChevronDown,
  List,
  Grid3x3,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react";

export default function DistributersManagementDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const inventoryData = [
    {
      id: 1,
      brand: "سامسونج",
      category: "إلكترونيات",
      status: "available",
      quantity: 150,
      price: 500,
      lastUpdate: "25 أكتوبر 2023",
    },
    {
      id: 2,
      brand: "أبل",
      category: "إلكترونيات",
      status: "low",
      quantity: 45,
      price: 3200,
      lastUpdate: "24 أكتوبر 2023",
    },
    {
      id: 3,
      brand: "هواوي",
      category: "إلكترونيات",
      status: "available",
      quantity: 300,
      price: 450,
      lastUpdate: "20 أكتوبر 2023",
    },
    {
      id: 4,
      brand: "سوني",
      category: "أجهزة منزلية",
      status: "out",
      quantity: 0,
      price: 1200,
      lastUpdate: "18 أكتوبر 2023",
    },
    {
      id: 5,
      brand: "شاومي",
      category: "إلكترونيات",
      status: "trending",
      quantity: 500,
      price: 800,
      lastUpdate: "26 أكتوبر 2023",
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      available: {
        bg: "bg-emerald-50 border border-emerald-100",
        text: "text-emerald-700",
        label: "متوفر",
        dot: "bg-emerald-500",
      },
      low: {
        bg: "bg-amber-50 border border-amber-100",
        text: "text-amber-700",
        label: "مخزون منخفض",
        dot: "bg-amber-500",
      },
      out: {
        bg: "bg-rose-50 border border-rose-100",
        text: "text-rose-700",
        label: "نفذت الكمية",
        dot: "bg-rose-500",
      },
      trending: {
        bg: "bg-purple-50 border border-purple-100",
        text: "text-purple-700",
        label: "الأكثر مبيعاً",
        icon: true,
      },
    };

    const badge = badges[status];
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badge.bg} ${badge.text}`}
      >
        {badge.icon ? (
          <TrendingUp className="w-3.5 h-3.5" />
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`}></span>
        )}
        {badge.label}
      </span>
    );
  };

  return (
    <div
      className="bg-slate-50 min-h-screen flex overflow-hidden font-sans"
      dir="rtl"
    >
      {/* Sidebar */}
      <aside className="w-72 bg-white border-l border-slate-200 flex flex-col shrink-0 h-screen z-20">
        {/* User Profile Section */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full w-12 h-12 shadow-md ring-4 ring-slate-50 flex items-center justify-center text-white font-bold text-lg">
                أم
              </div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 text-base font-bold leading-tight">
                أحمد محمد
              </h1>
              <p className="text-slate-500 text-sm">مدير النظام</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1.5">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 group transition-all"
          >
            <LayoutDashboard className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
            <span className="text-sm font-semibold">لوحة التحكم</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 group transition-all border border-blue-100/50"
          >
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold">المخزون</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 group transition-all"
          >
            <ShoppingCart className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
            <span className="text-sm font-semibold">الطلبات</span>
            <span className="mr-auto bg-rose-100 text-rose-700 text-[10px] font-black px-2 py-0.5 rounded-full">
              3
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 group transition-all"
          >
            <BarChart3 className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
            <span className="text-sm font-semibold">التقارير</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 group transition-all mt-auto"
          >
            <Settings className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
            <span className="text-sm font-semibold">الإعدادات</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
            <span>لوحة التحكم</span>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-slate-900">إدارة المخزون</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 left-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 text-3xl font-black">
                  إدارة المخزون
                </h2>
                <p className="text-slate-500 text-base">
                  تتبع وإدارة كميات المنتجات والأسعار وحالة المخزون بشكل فوري
                </p>
              </div>
              <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-blue-600 hover:bg-blue-700 transition-all text-white gap-2 text-sm font-bold shadow-lg shadow-blue-200">
                <Plus className="w-5 h-5" />
                <span>إضافة مخزون جديد</span>
              </button>
            </div>

            {/* Toolbar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="lg:col-span-5 relative">
                <div className="flex w-full h-12 items-center rounded-xl bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/5 transition-all">
                  <Search className="w-5 h-5 mr-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 px-3 text-sm font-medium"
                    placeholder="بحث عن علامة تجارية..."
                  />
                </div>
              </div>

              <div className="lg:col-span-7 flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`h-10 px-5 rounded-xl text-sm font-bold transition-all ${
                    activeFilter === "all"
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  الكل
                </button>
                <button className="h-10 px-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 flex items-center gap-2">
                  <span>مخزون منخفض</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="h-10 px-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 flex items-center gap-2">
                  <span>الأكثر مبيعاً</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-200">
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        العلامة التجارية
                      </th>
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        الحالة
                      </th>
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        الكمية
                      </th>
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        السعر
                      </th>
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        التحديث
                      </th>
                      <th className="py-4 px-6 text-slate-400 text-[10px] font-black uppercase tracking-widest text-left">
                        إجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {inventoryData.map((item) => (
                      <tr
                        key={item.id}
                        className="group hover:bg-blue-50/30 transition-colors"
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-colors">
                              <div className="w-5 h-5 bg-slate-300 rounded-sm"></div>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-900">
                                {item.brand}
                              </span>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="py-5 px-6 text-sm font-bold text-slate-700">
                          {item.quantity} وحدة
                        </td>
                        <td className="py-5 px-6 text-sm font-black text-slate-900">
                          {item.price} ر.س
                        </td>
                        <td className="py-5 px-6 text-xs font-medium text-slate-500">
                          {item.lastUpdate}
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-slate-200 transition-all">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-slate-200 transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                <p className="text-xs font-bold text-slate-400">
                  عرض <span className="text-slate-900">1</span> إلى{" "}
                  <span className="text-slate-900">5</span> من أصل{" "}
                  <span className="text-slate-900">24</span> نتيجة
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors">
                    السابق
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors">
                    التالي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
