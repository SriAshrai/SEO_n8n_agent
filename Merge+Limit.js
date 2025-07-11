
const validatedKeywords = [
  { keyword: "Global internship", monthly_volume: 90, competition_score: 7 },
  { keyword: "global internship programs", monthly_volume: 30, competition_score: 5 },
  { keyword: "international internship opportunities", monthly_volume: 30, competition_score: 19 },
  { keyword: "paid global internships", monthly_volume: 10, competition_score: 4 },
  { keyword: "overseas internship programs", monthly_volume: 260, competition_score: 47 },
  { keyword: "virtual global internships", monthly_volume: 10, competition_score: 55 }
];


const aiKeywords = [
  { keyword: "affordable global internships", is_estimated: true },
  { keyword: "global internship opportunities 2023", is_estimated: true },
  { keyword: "best global internship programs", is_estimated: true },
  { keyword: "remote global internship positions", is_estimated: true },
  { keyword: "global internship programs for students", is_estimated: true },
  { keyword: "paid global internships abroad", is_estimated: true },
  { keyword: "how to find global internships", is_estimated: true },
  { keyword: "global internships for college students", is_estimated: true },
  { keyword: "international internship opportunities", is_estimated: true },
  { keyword: "top global internship companies", is_estimated: true },
  { keyword: "global internship application tips", is_estimated: true },
  { keyword: "global internship experience benefits", is_estimated: true },
  { keyword: "global internship programs with housing", is_estimated: true },
  { keyword: "virtual global internships for students", is_estimated: true },
  { keyword: "global internships for recent graduates", is_estimated: true },
  { keyword: "global internship opportunities for engineers", is_estimated: true },
  { keyword: "global internship search websites", is_estimated: true },
  { keyword: "global internships in marketing", is_estimated: true },
  { keyword: "global internship programs in finance", is_estimated: true },
  { keyword: "global internships for business majors", is_estimated: true },
  { keyword: "how to apply for global internships", is_estimated: true },
  { keyword: "global internships in non-profits", is_estimated: true },
  { keyword: "short-term global internship programs", is_estimated: true },
  { keyword: "global internship opportunities in tech", is_estimated: true },
  { keyword: "global internships for environmental studies", is_estimated: true },
  { keyword: "global internships in healthcare", is_estimated: true },
  { keyword: "global internship placements for students", is_estimated: true },
  { keyword: "global internships for language learners", is_estimated: true },
  { keyword: "global internship programs with visa sponsorship", is_estimated: true },
  { keyword: "global internships for art students", is_estimated: true },
  { keyword: "global internship opportunities in education", is_estimated: true },
  { keyword: "global internships for STEM students", is_estimated: true },
  { keyword: "global internships in hospitality", is_estimated: true },
  { keyword: "global internship opportunities for women", is_estimated: true },
  { keyword: "global internships in social work", is_estimated: true },
  { keyword: "global internships in research", is_estimated: true },
  { keyword: "global internships for law students", is_estimated: true },
  { keyword: "global internships for humanities majors", is_estimated: true },
  { keyword: "global internship programs for high school students", is_estimated: true },
  { keyword: "global internships in international relations", is_estimated: true },
  { keyword: "global internships for tech startups", is_estimated: true },
  { keyword: "global internships with cultural exchange", is_estimated: true },
  { keyword: "global internships in digital marketing", is_estimated: true },
  { keyword: "global internships for aspiring entrepreneurs", is_estimated: true },
  { keyword: "global internships with travel opportunities", is_estimated: true }
];

// Merging is done down here
const combined = [
  ...validatedKeywords,
  ...aiKeywords.map(k => ({
    ...k,
    monthly_volume: 150,
    competition_score: 55
  }))
].slice(0, 50);

return combined.map(item => ({
  json: {
    ...item,
    seedKeyword: "Global internship",
    data_source: item.is_estimated ? "AI-Estimated" : "DataForSEO"
  }
}));