const handleValidatePhoneNumber = (phone) => {
  const phonePattern = /^(?:\+234|0)?(7[0-9]|8[0-9]|9[0-9])[0-9]{8}$/;
  return phonePattern.test(phone);
};

export default handleValidatePhoneNumber