const populateFeedbacksMaps = (store, feedbacksMap, managersFeedbacksMap, managerId) => {
  const feedbacks = store.feedbacks;
  for (let i = 0; i < feedbacks.length; i++) {
    if (!feedbacksMap[feedbacks[i].id]) {
      feedbacksMap[feedbacks[i].id] = feedbacks[i];
    }
    if (feedbacks[i].recipient_id === managerId) {
      if (!managersFeedbacksMap[managerId]) {
        managersFeedbacksMap[managerId] = [feedbacks[i].id];
      } else {
        managersFeedbacksMap[managerId].push(feedbacks[i].id);
      }
    }
  }
};

module.exports = populateFeedbacksMaps;