const populateEmployeesMaps = require("./populate_employees_maps");
const populateFeedbacksMaps = require("./populate_feedbacks_maps");

const generateScores = (store, managerIds) => {
  const employeesMap = {};
  const managersEmployeesMap = {};

  const feedbacksMap = {};
  const managersFeedbacksMaps = {};

  
  populateEmployeesMaps(store, employeesMap, managersEmployeesMap);
  
  // generate network -- all direct and indirect reports for a manager
  for (let i = 0; i < managerIds.length; i++) {
    populateFeedbacksMaps(store, feedbacksMap, managersFeedbacksMaps, managerIds[i]);
    const directReports = managersEmployeesMap[managerIds[i]];
    const indirectReports = [];
    // genOrg(employeesMap, managersEmployeesMap, directReports, indirectReports);
  }
};

// const genOrg = (employeesMap, managersEmployeesMap, directReports, indirectReports) => {
//   console.log("hi");
//   if (directReports.length === 0) return;

//   for (let i = 0; i < directReports.length; i++) {
//     const managerId = employeesMap[directReports[i]].managerId;
//     const deeperReports = managersEmployeesMap[managerId];

//     indirectReports.concat(deeperReports);
//     for (let j = 0; j < deeperReports.length; j++) {
//       genOrg(employeesMap, managersEmployeesMap, deeperReports, indirectReports);
//     }
//   }
// };

module.exports = generateScores;