import React, { useState } from "react";

const notes = [
  "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
  "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
  "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
  "Some countries do not have a short-term/long-term bifurcation. For now, we are calculating everything as long-term.",
  "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.",
];

const NotesDisclaimer = () => {
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <div className="mb-6 border border-gray-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setNotesOpen(!notesOpen)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#161B26] hover:bg-[#1a2030] transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-yellow-400 text-base">⚠</span>
          <span className="text-sm font-medium text-white">
            Important notes & disclaimers
          </span>
          <span className="text-[11px] bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full font-medium">
            {notes.length} notes
          </span>
        </div>
        <span
          className={`text-gray-400 text-lg transition-transform duration-300 ${
            notesOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ↓
        </span>
      </button>

      {notesOpen && (
        <div className="bg-[#0f1420] border-t border-gray-800 px-5 py-4 flex flex-col gap-3">
          {notes.map((note, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] font-semibold flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-sm text-gray-400 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesDisclaimer;