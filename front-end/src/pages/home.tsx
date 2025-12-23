import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
      dir="rtl"
    >
      <Link
        to="/signup"
        className="text-2xl rounded-lg bg-slate-50 py-2 px-10 text-slate-700"
      >
        انضم إلى خدمتنا
      </Link>
    </div>
  );
}
