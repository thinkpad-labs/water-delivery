import { useState } from "react";
import {
  Network,
  LogIn,
  Award,
  CheckCircle,
  Globe,
  Building2,
  Phone,
  MapPin,
  Map,
  ChevronDown,
  X,
  PlusCircle,
  CloudUpload,
  ArrowRight,
} from "lucide-react";

export default function DistributorsDetails() {
  const [selectedBrands, setSelectedBrands] = useState(["سامسونج", "إل جي"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [brandInput, setBrandInput] = useState("");

  const brands = [
    { id: 1, name: "سامسونج", nameEn: "Samsung" },
    { id: 2, name: "إل جي", nameEn: "LG" },
    { id: 3, name: "سوني", nameEn: "Sony" },
    { id: 4, name: "باناسونيك", nameEn: "Panasonic" },
    { id: 5, name: "توشيبا", nameEn: "Toshiba" },
    { id: 6, name: "شارب", nameEn: "Sharp" },
  ];

  const removeBrand = (brand) => {
    setSelectedBrands(selectedBrands.filter((b) => b !== brand));
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans" dir="rtl">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">
              <Network className="w-6 h-6" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 hidden md:block">
              منصة التوزيع العربية
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors hidden sm:block">
              الصفحة الرئيسية
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
              <LogIn className="w-5 h-5" />
              <span>تسجيل الدخول</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        {/* Registration Card */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden relative">
          {/* Top Decoration Line */}
          <div className="h-1.5 w-full bg-gradient-to-l from-blue-600 to-blue-400"></div>

          <div className="flex flex-col md:flex-row">
            {/* Left Side (Visual/Context) */}
            <div className="hidden md:flex md:w-1/3 bg-slate-50 p-8 flex-col justify-between border-l border-slate-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  لماذا التسجيل معنا؟
                </h3>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      الوصول إلى شبكة واسعة من الموردين المعتمدين في المنطقة.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      إدارة الطلبات والمخزون بسهولة تامة عبر لوحة تحكم موحدة.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      دعم فني وتقني مخصص لشركائنا على مدار الساعة.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden relative h-32 w-full border border-slate-200">
                <div className="absolute inset-0 bg-slate-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-md flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    تغطية إقليمية شاملة
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side (The Form) */}
            <div className="w-full md:w-2/3 p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  تسجيل حساب موزع جديد
                </h2>
                <p className="text-slate-500">
                  يرجى ملء البيانات التالية لإتمام عملية التسجيل وتوثيق الحساب
                  الرسمي.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      اسم الشركة
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="أدخل اسم الشركة الرسمي"
                        className="w-full h-12 rounded-lg border border-slate-300 bg-white text-slate-900 px-4 pr-11 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                      <Building2 className="w-5 h-5 absolute right-3 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700">
                      رقم الهاتف
                    </label>
                    <div className="flex flex-row-reverse rounded-lg border border-slate-300 bg-white overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all">
                      <div className="flex items-center justify-center bg-slate-50 px-3 border-r border-slate-200">
                        <span
                          className="text-sm font-semibold text-slate-600"
                          dir="ltr"
                        >
                          +966
                        </span>
                      </div>
                      <input
                        type="tel"
                        placeholder="5X XXX XXXX"
                        dir="ltr"
                        className="w-full h-12 border-none bg-transparent text-slate-900 px-4 text-left focus:ring-0 placeholder:text-right placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    الموقع الجغرافي
                  </label>
                  <div className="relative group cursor-pointer">
                    <input
                      type="text"
                      placeholder="حدد موقع المستودع الرئيسي على الخريطة"
                      readOnly
                      className="w-full h-12 rounded-lg border border-slate-300 bg-white text-slate-900 pr-11 pl-28 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer"
                    />
                    <button
                      type="button"
                      className="absolute left-1.5 top-1.5 bottom-1.5 bg-slate-100 hover:bg-slate-200 text-blue-700 border border-slate-200 rounded-md px-3 flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <Map className="w-4 h-4" />
                      <span className="text-xs font-bold">فتح الخريطة</span>
                    </button>
                    <MapPin className="w-5 h-5 absolute right-3 top-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>

                {/* Brands Dropdown */}
                <div className="flex flex-col gap-2 relative z-10">
                  <label className="text-sm font-bold text-slate-700">
                    العلامات التجارية المتاحة
                  </label>

                  {/* Input Trigger */}
                  <div className="relative">
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full min-h-[48px] rounded-lg border bg-white text-slate-900 px-3 py-2 flex flex-wrap gap-2 items-center cursor-pointer transition-all ${
                        isDropdownOpen
                          ? "border-blue-500 ring-4 ring-blue-500/10"
                          : "border-slate-300"
                      }`}
                    >
                      {selectedBrands.map((brand) => (
                        <span
                          key={brand}
                          className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded text-sm font-medium flex items-center gap-1"
                        >
                          {brand}
                          <X
                            className="w-4 h-4 hover:text-red-600 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeBrand(brand);
                            }}
                          />
                        </span>
                      ))}
                      <input
                        type="text"
                        placeholder={
                          selectedBrands.length === 0
                            ? "اختر العلامات التجارية..."
                            : ""
                        }
                        value={brandInput}
                        onChange={(e) => setBrandInput(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-sm min-w-[100px] outline-none"
                      />
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 absolute left-3 top-3.5 text-slate-400 pointer-events-none transition-transform ${
                        isDropdownOpen ? "rotate-180 text-blue-500" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 left-0 mt-2 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="max-h-48 overflow-y-auto p-1">
                        {brands.map((brand) => (
                          <label
                            key={brand.id}
                            className="flex items-center gap-3 p-2.5 hover:bg-slate-50 rounded-md cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={selectedBrands.includes(brand.name)}
                              onChange={() => toggleBrand(brand.name)}
                              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm font-medium text-slate-700">
                              {brand.name}{" "}
                              <span className="text-slate-400 font-normal mr-1">
                                ({brand.nameEn})
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 p-2 bg-slate-50">
                        <button
                          type="button"
                          className="w-full flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-600 hover:text-white py-2.5 rounded-md transition-all text-sm font-bold"
                        >
                          <PlusCircle className="w-5 h-5" />
                          إضافة علامة تجارية مخصصة
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* File Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700">
                    ملفات التسجيل (السجل التجاري، البطاقة الضريبية)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-blue-200 transition-transform">
                      <CloudUpload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-slate-700 mb-1">
                      <span className="text-blue-600 font-bold">
                        اضغط للرفع
                      </span>{" "}
                      أو اسحب الملفات هنا
                    </p>
                    <p className="text-xs text-slate-500">
                      PDF, JPG, PNG (الحد الأقصى للملف 5 ميجابايت)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    className="w-full h-13 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>إتمام عملية التسجيل</span>
                    <ArrowRight className="w-5 h-5 rotate-180" />
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
