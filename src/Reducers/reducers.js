export const medicationInfo = (state = [], action) => {
  switch (action.type) {
    case "ADD_MED":
      return [...state, action.medication];

    default:
      return state;
  }
};
