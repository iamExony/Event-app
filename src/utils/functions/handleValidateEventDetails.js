import handleValidateEmail from './handleValidateEmail';
import handleValidatePhoneNumber from './handleValidatePhoneNumber';

const handleValidatedEventDetails = ({
  eventName,
  eventDate,
  eventType,
  eventLocationType,
  eventAddress,
  nameChecked,
  addressChecked,
}) => {
  const validationRules = [
    ...(!nameChecked
      ? [
          {
            valid: !!eventName,
            message:
              "Event name is required. Please provide the name of the event.",
          },
        ]
      : []),
    {
      valid: !!eventDate,
      message:
        "Event date is required. Please provide the date when the event will take place.",
    },
    {
      valid: !!eventType,
      message: "Event type is required. Please specify the type of event.",
    },
    {
      valid: !!eventLocationType,
      message:
        "Location type is required. Please specify whether the event is virtual or in-person.",
    },
    // { valid: !!eventAddress, message: "Event address is required. Please provide the address where the event will be held." },
  ];

  for (const rule of validationRules) {
    if (!rule.valid) {
      return { status: false, message: rule.message };
    }
  }

  return { status: true, message: null };
};

export default handleValidatedEventDetails;
