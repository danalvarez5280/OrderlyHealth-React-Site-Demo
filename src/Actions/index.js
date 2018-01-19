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

export const saveUserDocInfo = (userDocInfo) => {
  return {
    type: "USER_DOC_INFO",
    userDocInfo
  };
};

export const saveUserInsurance = (userInsurance) => {
  return {
    type: "USER_INSURANCE",
    userInsurance
  };
};

export const saveUserMedicalInfo = (userMedical) => {
  return {
    type: "USER_MEDICAL",
    userMedical
  }
};