const fetchEmployees = require("./employees");
const fetchFeedbacks = require("./feedbacks");

const employeesCB = (data, store) => (store.employees = data);
const feedbacksCB = (data, store) => (store.feedbacks = data);



const loadData = (store) => {
  fetchEmployees(employeesCB, store);
  fetchFeedbacks(feedbacksCB, store);
  return new Promise((resolve, reject) => {
    const ensureData = setInterval(() => {
      if (store.employees && store.feedbacks) {
        resolve(store);
        clearInterval(ensureData);
      }
    }, 100);
  });
};

const store = {};
loadData(store).then(updatedStore => {
  console.log(updatedStore.employees[0]);
  console.log(updatedStore.feedbacks[0]);
});