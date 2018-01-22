export const addMed = (medication) => {
  return {
    type: "ADD_MED",
    medication
  };
};

export const addChat = (dialogue) => {
  return {
    type: "ADD_CHAT",
    dialogue
  };
};

export const login = (user) => {
  return {
    type: "LOGIN",
    user
  };
};

export const submitOrder = (orderInfo) => {
  return {
    type: "SUBMIT_ORDER",
    orderInfo
  };
};

export const saveUserProfile = (userInfo) => {
  return {
    type: "USER_INFO",
    userInfo
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