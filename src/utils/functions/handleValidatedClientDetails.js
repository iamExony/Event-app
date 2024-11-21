import handleValidateEmail from './handleValidateEmail';
import handleValidatePhoneNumber from './handleValidatePhoneNumber';

const handleValidatedClientDetails = ({ clientName, clientType, clientEmail, clientNumber }) => {
  const validationRules = [
    { valid: !!clientName, message: "Client name must be added" },
    { valid: !!clientType, message: "Event type must be added" },
    { valid: handleValidateEmail(clientEmail), message: "Client email is not valid" },
    { valid: handleValidatePhoneNumber(clientNumber), message: "Client phone number is not valid" },
  ];

  for (const rule of validationRules) {
    if (!rule.valid) {
      return { status: false, message: rule.message };
    }
  }

  return { status: true, message: null };
};

export default handleValidatedClientDetails;
