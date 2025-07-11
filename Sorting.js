return $input.all().sort((a, b) => {
  // Initial Non-AI is prioritized 
  if (a.json.is_estimated !== b.json.is_estimated) {
    return a.json.is_estimated ? 1 : -1;
  }
  
  // Then Lower competition is prioritized
  const compDiff = a.json.competition_score - b.json.competition_score;
  if (compDiff !== 0) return compDiff;
  
  // Then Higher volume is Prioritized
  return b.json.monthly_volume - a.json.monthly_volume;
});