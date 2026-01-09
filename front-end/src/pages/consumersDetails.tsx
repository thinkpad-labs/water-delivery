import { useState } from "react";
import {
  Truck,
  Languages,
  Bell,
  MapPin,
  Crosshair,
  Banknote,
  CreditCard,
  CheckCircle,
  Check,
  Info,
  X,
  ChevronDown,
} from "lucide-react";

export default function ConsumerRegistration() {
  const [selectedBrands, setSelectedBrands] = useState(["المراعي", "بيبسيكو"]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const brands = [
    { id: 1, name: "المراعي", value: "brand1" },
    { id: 2, name: "صافيو", value: "brand2" },
    { id: 3, name: "نادك", value: "brand3" },
    { id: 4, name: "بيبسيكو", value: "brand4" },
  ];

  const removeBrand = (brand) => {
    setSelectedBrands(selectedBrands.filter((b) => b !== brand));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans" dir="rtl">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-6 md:px-10 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 text-blue-600 flex items-center justify-center rounded-xl bg-blue-50">
            <Truck className="w-6 h-6" />
          </div>
          <h2 className="text-slate-900 text-lg font-bold tracking-tight">
            منصة التوزيع
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="flex w-10 h-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            <Languages className="w-5 h-5" />
          </button>
          <button className="flex w-10 h-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 left-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-10 px-4 md:px-10">
        <div className="w-full max-w-lg flex flex-col gap-6">
          {/* Page Heading */}
          <div className="flex flex-col gap-1 text-right">
            <h1 className="text-slate-900 text-3xl font-black leading-tight">
              تسجيل حساب جديد
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              بيانات المستهلك —{" "}
              <span className="text-blue-600 font-bold">الخطوة ٢ من ٢</span>
            </p>
          </div>

          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 md:p-10">
            <div className="flex flex-col gap-6">
              {/* Phone Number Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-800 text-sm font-bold">
                  رقم الهاتف
                </label>
                <div className="flex flex-row-reverse gap-2">
                  <input
                    type="tel"
                    placeholder="5X XXX XXXX"
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 h-12 rounded-xl text-slate-900 border border-slate-300 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all px-4 text-base text-right placeholder:text-slate-400"
                  />
                  <div className="flex items-center justify-center rounded-xl border border-slate-300 bg-slate-50 px-3 h-12 min-w-[100px] gap-2">
                    <span
                      className="text-slate-700 font-bold text-sm"
                      dir="ltr"
                    >
                      +966
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Location Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-800 text-sm font-bold">
                  الموقع الجغرافي
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="الرياض، حي العليا..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-12 rounded-xl text-slate-900 border border-slate-300 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all pr-4 pl-12 text-base placeholder:text-slate-400"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <button
                  type="button"
                  className="text-blue-600 text-xs font-bold flex items-center gap-1.5 self-start hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg"
                >
                  <Crosshair className="w-4 h-4" />
                  تحديد موقعي التلقائي
                </button>
              </div>

              {/* Preferred Brands Multi-Select */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-800 text-sm font-bold">
                  العلامات التجارية المفضلة
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      const selectedBrandName = brands.find(
                        (b) => b.value === selectedValue
                      )?.name;
                      if (
                        selectedBrandName &&
                        !selectedBrands.includes(selectedBrandName)
                      ) {
                        setSelectedBrands([
                          ...selectedBrands,
                          selectedBrandName,
                        ]);
                      }
                      e.target.value = "";
                    }}
                    className="w-full h-12 rounded-xl text-slate-900 border border-slate-300 bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all pr-4 pl-10 text-base appearance-none cursor-pointer"
                  >
                    <option value="">اختر العلامات التجارية...</option>
                    {brands.map((brand) => (
                      <option
                        key={brand.id}
                        value={brand.value}
                        disabled={selectedBrands.includes(brand.name)}
                      >
                        {brand.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 absolute left-3 top-3.5 text-blue-600 pointer-events-none" />
                </div>

                {/* Selected Chips */}
                {selectedBrands.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedBrands.map((brand) => (
                      <div
                        key={brand}
                        className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm"
                      >
                        <span className="text-sm font-bold text-blue-700">
                          {brand}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeBrand(brand)}
                          className="text-blue-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Method Selection */}
              <div className="flex flex-col gap-3 pt-2">
                <label className="text-slate-800 text-sm font-bold">
                  طريقة الدفع المفضلة
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Option 1: Cash */}
                  <label
                    className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${
                      paymentMethod === "cash"
                        ? "border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-500"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex w-10 h-10 items-center justify-center rounded-full border transition-colors ${
                            paymentMethod === "cash"
                              ? "bg-white border-blue-200 text-blue-600"
                              : "bg-slate-50 border-slate-100 text-slate-400"
                          }`}
                        >
                          <Banknote className="w-5 h-5" />
                        </div>
                        <span
                          className={`font-bold text-sm ${
                            paymentMethod === "cash"
                              ? "text-blue-700"
                              : "text-slate-600"
                          }`}
                        >
                          نقدًا (كاش)
                        </span>
                      </div>
                      {paymentMethod === "cash" && (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </label>

                  {/* Option 2: Credit Card */}
                  <label
                    className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50 shadow-md ring-1 ring-blue-500"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex w-10 h-10 items-center justify-center rounded-full border transition-colors ${
                            paymentMethod === "card"
                              ? "bg-white border-blue-200 text-blue-600"
                              : "bg-slate-50 border-slate-100 text-slate-400"
                          }`}
                        >
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <span
                          className={`font-bold text-sm ${
                            paymentMethod === "card"
                              ? "text-blue-700"
                              : "text-slate-600"
                          }`}
                        >
                          بطاقة بنكية
                        </span>
                      </div>
                      {paymentMethod === "card" && (
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                  </label>
                </div>
                <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-1">
                  <Info className="w-3.5 h-3.5 text-blue-500" />
                  سيتم تفعيل طرق دفع إضافية قريباً بناءً على منطقتك
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex w-full items-center justify-center rounded-xl h-14 bg-blue-600 text-white gap-2 text-base font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                >
                  <Check className="w-6 h-6" />
                  إكمال عملية التسجيل
                </button>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center pb-8">
            <p className="text-sm text-slate-500">
              هل تملك حساباً بالفعل؟{" "}
              <a className="text-blue-600 font-bold hover:underline" href="#">
                سجل الدخول من هنا
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
