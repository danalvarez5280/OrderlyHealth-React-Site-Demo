//example

export const medicationInfo = (state = [], action) => {
  switch (action.type) {
    case "ADD_MED":
      return [...state, action.medInfo];

    default:
      return state;
  }
};
