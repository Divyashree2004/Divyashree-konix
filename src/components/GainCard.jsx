import React from "react";

const Row = ({ label, value, isLoss }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-800 last:border-none">
    <span className="text-xs text-gray-500">{label}</span>
    <span className={`text-sm font-medium ${isLoss ? "text-red-400" : "text-green-400"}`}>
      {isLoss ? "−" : "+"}₹{Math.abs(value).toLocaleString("en-IN")}
    </span>
  </div>
);

const Tag = ({ label, color }) => (
  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${color}`}>
    {label}
  </span>
);

const GainCard = ({ title, data }) => {
  const net =
    (data.stcg.profits - data.stcg.losses) +
    (data.ltcg.profits - data.ltcg.losses);

  return (
    <div className="bg-[#161B26] border border-gray-800 rounded-2xl p-5">

      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
        {title}
      </p>

      {/* STCG Section */}
      <div className="mb-1">
        <Tag label="STCG" color="bg-blue-900/60 text-blue-300" />
      </div>
      <Row label="Profits" value={data.stcg.profits} isLoss={false} />
      <Row label="Losses" value={data.stcg.losses} isLoss={true} />

      {/* LTCG Section */}
      <div className="mt-3 mb-1">
        <Tag label="LTCG" color="bg-green-900/40 text-green-300" />
      </div>
      <Row label="Profits" value={data.ltcg.profits} isLoss={false} />
      <Row label="Losses" value={data.ltcg.losses} isLoss={true} />

      {/* Net */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-700">
        <span className="text-xs text-gray-400">Net capital gains</span>
        <span className="text-base font-semibold text-white">
          ₹{net.toLocaleString("en-IN")}
        </span>
      </div>

    </div>
  );
};

export default GainCard;