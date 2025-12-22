export const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    Active: "bg-emerald-100 text-emerald-800",
    Overdue: "bg-rose-100 text-rose-800",
    Pending: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        colors[status as keyof typeof colors]
      }`}
    >
      {status}
    </span>
  );
};
