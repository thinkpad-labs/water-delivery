import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Store,
  Send,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DistributorsForm() {
  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    phone: "",
    email: "",
    location: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://water-delivery.thinkpad.cloud/api/distributors/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Distributor added successfully!");
        navigate("/distributors");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputClasses =
    "w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  return (
    <div className="min-h-screen bg-[#f8fafd] p-8">
      {/* Header section */}
      <div className="max-w-2xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إضافة موزع جديد</h1>
          <p className="text-gray-500 text-sm mt-1">
            أدخل بيانات الموزع لتسجيله في المنصة
          </p>
        </div>
        <Link
          to="/distributors"
          className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 ml-1" />
          <span>العودة</span>
        </Link>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Row 1: Name & Store Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                اسم الموزع
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="الاسم بالكامل"
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                اسم المتجر
              </label>
              <div className="relative">
                <Store className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="متجر الأمل"
                  className={inputClasses}
                  value={formData.storeName}
                  onChange={(e) =>
                    setFormData({ ...formData, storeName: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                رقم الهاتف
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className={inputClasses}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Row 3: Location */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              الموقع (رابط خرائط جوجل أو إحداثيات)
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="الصق الرابط هنا"
                className={inputClasses}
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Row 4: Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              كلمة المرور
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                className={inputClasses}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-100"
            >
              <Send className="w-5 h-5 ml-2" />
              <span>حفظ بيانات الموزع</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
