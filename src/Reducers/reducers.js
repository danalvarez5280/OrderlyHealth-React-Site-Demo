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

export const saveUserDocInfo = (state = {}, action) => {
  switch(action.type) {
    case "USER_DOC_INFO":
    return Object.assign({}, state, action.userDocInfo);

    default:
    return state;
  }
};

export const saveUserInsurance = (state = {}, action) => {
  switch(action.type) {
    case "USER_INSURANCE":
    return Object.assign({}, state, action.userInsurance);

    default: 
    return state;
  }
}
