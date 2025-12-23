import { Settings, Zap } from "lucide-react";

export default function Header() {
  return (
    <>
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
            منصىة الإدارة
          </h2>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </div>
        </div>
      </header>
    </>
  );
}
