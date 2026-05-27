import React, { useState } from "react";
import GainCard from "../components/GainCard";
import HoldingsTable from "../components/HoldingsTable";
import { capitalGains } from "../mock/gainsData";
import { holdings } from "../mock/holdingsData";
import { calculateHarvesting } from "../utils/calculations";
import NotesDisclaimer from "../components/NotesDisclaimer";

const Home = () => {
  const [selectedAssets, setSelectedAssets] = useState([]);

  const updatedCapitalGains = calculateHarvesting(
    capitalGains,
    holdings,
    selectedAssets
  );

  const beforeHarvesting =
    (capitalGains.stcg.profits - capitalGains.stcg.losses) +
    (capitalGains.ltcg.profits - capitalGains.ltcg.losses);

  const afterHarvesting =
    (updatedCapitalGains.stcg.profits - updatedCapitalGains.stcg.losses) +
    (updatedCapitalGains.ltcg.profits - updatedCapitalGains.ltcg.losses);

  const savings = beforeHarvesting - afterHarvesting;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 py-8">

      {/* Header */}
      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">
          Tax loss harvesting
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Optimise your crypto portfolio to reduce tax liability
        </p>
      </div>
      <NotesDisclaimer />

      {/* Savings Banner */}
      {savings > 0 && (
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 mb-6">
          <span className="text-green-400 text-lg">✦</span>
          <p className="text-sm text-green-300">
            You're going to save{" "}
            <span className="font-semibold text-green-400">
              ₹{savings.toLocaleString("en-IN")}
            </span>{" "}
            by harvesting selected assets
          </p>
        </div>
      )}

      {/* Gain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GainCard title="Pre Harvesting" data={capitalGains} />
        <GainCard title="After Harvesting" data={updatedCapitalGains} />
      </div>

      {/* Holdings Table */}
      <HoldingsTable
        selectedAssets={selectedAssets}
        setSelectedAssets={setSelectedAssets}
      />

    </div>
  );
};

export default Home;