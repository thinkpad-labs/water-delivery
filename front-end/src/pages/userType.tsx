import { useState } from "react";
import {
  Truck,
  ShoppingBasket,
  Zap,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function UserType() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? "dark bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Header */}
      <header className="w-full py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <Zap className="w-5 h-5" />
          </div>
          <span
            className={`text-xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            منصة الإدارة
          </span>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full shadow-sm border transition-all ${
            isDark
              ? "bg-slate-800 border-slate-700 text-gray-300 hover:bg-slate-700"
              : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="grow flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              أهلاً بك، يرجى اختيار نوع الحساب
            </h1>
            <p
              className={`max-w-lg mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              اختر الطريقة التي تود استخدام المنصة بها للبدء في تجربة مخصصة
              لاحتياجاتك
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir="rtl">
            {/* Distributor Card */}
            <div
              className={`group relative p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center border-2 border-transparent hover:border-blue-600 ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${
                  isDark
                    ? "bg-blue-900/30 text-blue-500"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Truck className="w-12 h-12" />
              </div>
              <h2
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                موزع
              </h2>
              <p
                className={`mb-8 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                انضم إلى شبكة الموزعين لدينا، قم بإدارة منتجاتك، تتبع طلباتك،
                ووسع نطاق أعمالك بكل سهولة.
              </p>
              <Link
                to="/signup"
                className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/30"
              >
                تسجيل دخول كموزع
                <ArrowRight className="w-5 h-5" />
              </Link>
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-blue-900 text-blue-300"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                للشركات
              </span>
            </div>

            {/* Consumer Card */}
            <div
              className={`group relative p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center border-2 border-transparent hover:border-blue-600 ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${
                  isDark
                    ? "bg-orange-900/20 text-orange-500"
                    : "bg-orange-50 text-orange-500"
                }`}
              >
                <ShoppingBasket className="w-12 h-12" />
              </div>
              <h2
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                مستهلك
              </h2>
              <p
                className={`mb-8 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                تصفح آلاف المنتجات، اطلب مباشرة من أفضل الموزعين المعتمدين،
                واحصل على أفضل العروض والأسعار.
              </p>
              <Link
                to="/signup"
                className={`w-full py-4 px-6 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                تسجيل دخول كمستهلك
                <ArrowRight className="w-5 h-5" />
              </Link>
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                  isDark
                    ? "bg-orange-900 text-orange-300"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                للأفراد
              </span>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center">
            <p
              className={`flex items-center justify-center gap-2 ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              هل تحتاج إلى مساعدة؟
              <a
                href="#"
                className="text-blue-600 hover:underline font-semibold"
              >
                تواصل مع الدعم الفني
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`w-full py-8 text-center text-sm ${
          isDark ? "text-gray-600" : "text-gray-400"
        }`}
      >
        <p>© 2026 جميع الحقوق محفوظة لمنصة الإدارة</p>
      </footer>

      {/* Background Blur Effects */}
      <div className="fixed top-0 right-0 -z-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
}
