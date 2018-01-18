export const addMed = (state = [], action) => {
  switch (action.type) {
    case "ADD_MED":
      return [...state, action.medication];

    default:
      return state;
  }
};

export const submitOrder = (state = [], action) => {
  switch(action.type) {
    case "SUBMIT_ORDER":
      return [...state, action.orderInfo];

      default:
      return state;
  }
};
