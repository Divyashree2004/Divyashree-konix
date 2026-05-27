export const calculateHarvesting = (
  originalGains,
  holdings,
  selectedAssets
) => {
  const updated = structuredClone(originalGains);

  const selectedHoldings = holdings.filter((item) =>
    selectedAssets.includes(item.id)
  );

  selectedHoldings.forEach((item) => {

    // STCG
    if (item.stcg.gain > 0) {
      updated.stcg.profits += item.stcg.gain;
    } else {
      updated.stcg.losses += Math.abs(item.stcg.gain);
    }

    // LTCG
    if (item.ltcg.gain > 0) {
      updated.ltcg.profits += item.ltcg.gain;
    } else {
      updated.ltcg.losses += Math.abs(item.ltcg.gain);
    }

  });

  return updated;
};