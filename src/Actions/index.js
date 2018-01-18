export const addMed = (medication) => {
  return {
    type: "ADD_MED",
    medication
  };
};

export const submitOrder = (orderInfo) => {
  return {
    type: "SUBMIT_ORDER",
    orderInfo
  };
};