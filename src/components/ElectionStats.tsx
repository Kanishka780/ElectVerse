import { Users, Landmark, Calendar, Zap } from "lucide-react";

export default function ElectionStats() {
  const stats = [
    {
      icon: <Users size={24} />,
      value: "96.8 Cr",
      label: "Registered voters (2024)",
    },
    {
      icon: <Landmark size={24} />,
      value: "543",
      label: "Lok Sabha constituencies",
    },
    {
      icon: <Calendar size={24} />,
      value: "7 Phases",
      label: "2024 General Election",
    },
    {
      icon: <Zap size={24} />,
      value: "1951",
      label: "First General Election",
    },
  ];

  return (
    <div className="w-full bg-[#0B1F3A] text-white border-b border-gray-700 shadow-inner">
      <div className="max-w-6xl mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="text-[#22C55E] mb-1">{s.icon}</div>

            <p className="text-2xl font-bold text-white">{s.value}</p>

            <p className="text-sm text-gray-300 font-medium">{s.label}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
