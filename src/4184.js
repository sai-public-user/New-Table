const row = {
  id: "",
  prescriberName: "string",
  prescriberMSO: "string",
  prescriberPrimaryPractice: "string",
  prescriberPrimaryAddress: "string",
  prescriberPrimaryCounty: "string",
  npiNumber: "string",
  PrimarySpeciality: "string",
  normalizedMetrics: {
    spendPerMember: 0,
    genericDispensingRate: 0,
    costPerScript: 0,
    extendedDaySuppleScriptPercentile: 0,
    nonFormularyFillsPercentile: 0,
    totalFills: 0,
    totalAllowed: 0,
    genericEfficiencyRate: 0,
    opioidFillsPercentile: 0,
    preferedBrandFills: 0,
    nonPreferredBrandFillsPercentils: 0,
    specialityFillsPercentile: 0,
    selectCareFillsPercentile: 0
  },
  nonNormalizedMetrics: {
    spendPerMember: 0,
    genericDispensingRate: 0,
    costPerScript: 0,
    extendedDaySuppleScriptPercentile: 0,
    nonFormularyFillsPercentile: 0,
    totalFills: 0,
    totalAllowed: 0,
    genericEfficiencyRate: 0,
    opioidFillsPercentile: 0,
    preferedBrandFills: 0,
    nonPreferredBrandFillsPercentils: 0,
    specialityFillsPercentile: 0,
    selectCareFillsPercentile: 0
  }
};

const rows = [];

for (let i = 0; i < 20; i++) {
  let data = { ...row };
  data.id = i;
  rows.push(data);
}

const Data = {
  headers: [
    { name: "prescriber Name", value: "prescriberName" },
    { name: "prescriber MSO ", value: "prescriberMSO" },
    { name: "prescriber Primary Practice", value: "prescriberPrimaryPractice" },
    { name: "prescriber Primary Address", value: "prescriberPrimaryAddress" },
    { name: "prescriber Primary County", value: "prescriberPrimaryCounty" },
    { name: "NPI Number", value: "npiNumber" },
    { name: "Primary Speciality", value: "PrimarySpeciality" }
  ],
  rows: rows
};

export default Data;
