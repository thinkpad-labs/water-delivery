export const StatCard = ({
  icon: Icon,
  label,
  value,
  badge,
  badgeColor,
}: any) => (
  <div className="flex flex-col justify-between gap-3 sm:gap-4 rounded-xl p-4 sm:p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 group">
    <div className="flex justify-between items-start">
      <div className="p-2 sm:p-3 bg-blue-50 rounded-full text-blue-600">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <span
        className={`${badgeColor} px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold`}
      >
        {badge}
      </span>
    </div>
    <div>
      <p className="text-slate-600 text-xs sm:text-sm font-medium">{label}</p>
      <p className="text-slate-900 text-2xl sm:text-3xl font-bold mt-0.5 sm:mt-1">
        {value}
      </p>
    </div>
  </div>
);
