const loadData = require("./fetch_and_load_data/load_data");
const generateScores = require("./generate_scores/generate_scores");

const store = {};
const managerIds = [
  "ab487f8c-8ebc-4bf6-b8fa-8dc85f880716",
  "f4cb98dc-e6a0-488e-93a2-e9241c5b70f6"
];

loadData(store)
.then(updatedStore => generateScores(updatedStore, managerIds));
