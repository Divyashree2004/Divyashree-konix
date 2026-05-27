import React from "react";
import { holdings } from "../mock/holdingsData";

const GainPill = ({ value }) => {
  const isPositive = value >= 0;
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        isPositive
          ? "bg-green-500/10 text-green-400"
          : "bg-red-500/10 text-red-400"
      }`}
    >
      {isPositive ? "+" : "−"}₹{Math.abs(value).toLocaleString("en-IN")}
    </span>
  );
};

const HoldingsTable = ({ selectedAssets, setSelectedAssets }) => {

  const handleSelect = (id) => {
    if (selectedAssets.includes(id)) {
      setSelectedAssets(selectedAssets.filter((item) => item !== id));
    } else {
      setSelectedAssets([...selectedAssets, id]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAssets(holdings.map((item) => item.id));
    } else {
      setSelectedAssets([]);
    }
  };

  const allSelected = selectedAssets.length === holdings.length;

  return (
    <div className="bg-[#161B26] border border-gray-800 rounded-2xl overflow-hidden">

      {/* Table Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
        <p className="text-sm font-medium text-white">Holdings</p>
        <p className="text-xs text-gray-500">
          {selectedAssets.length} asset{selectedAssets.length !== 1 ? "s" : ""} selected
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b border-gray-800 text-left">
              <th className="px-5 py-3 w-10">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="accent-indigo-500 w-3.5 h-3.5 cursor-pointer"
                />
              </th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Asset</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Holdings</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Avg buy price</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Current price</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Short-term gain</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Long-term gain</th>
              <th className="px-3 py-3 text-xs font-medium text-gray-500">Amount to sell</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((item) => {
              const isSelected = selectedAssets.includes(item.id);
              return (
                <tr
                  key={item.id}
                  className={`border-b border-gray-800 last:border-none transition-colors ${
                    isSelected ? "bg-indigo-500/5" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <td className="px-5 py-3.5">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelect(item.id)}
                      className="accent-indigo-500 w-3.5 h-3.5 cursor-pointer"
                    />
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-semibold text-gray-300">
                        {item.symbol.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white leading-tight">
                          {item.coin}
                        </p>
                        <p className="text-[11px] text-gray-500">{item.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 text-gray-300">{item.totalHoldings}</td>
                  <td className="px-3 py-3.5 text-gray-300">
                    ₹{item.averageBuyPrice.toLocaleString("en-IN")}
                  </td>
                  <td className="px-3 py-3.5 text-gray-300">
                    ₹{item.currentPrice.toLocaleString("en-IN")}
                  </td>
                  <td className="px-3 py-3.5">
                    <GainPill value={item.stcg.gain} />
                  </td>
                  <td className="px-3 py-3.5">
                    <GainPill value={item.ltcg.gain} />
                  </td>
                  <td className="px-3 py-3.5">
                    {isSelected ? (
                      <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                        {item.totalHoldings}
                      </span>
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default HoldingsTable;