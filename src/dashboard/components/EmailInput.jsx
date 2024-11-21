// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { IoCloseSharp } from 'react-icons/io5';

// const EmailInput = ({ initialEmails }) => {
//   const [emails, setEmails] = useState(initialEmails);
//   const [emailInput, setEmailInput] = useState('');

//   const handleAddEmail = () => {
//     const trimmedEmail = emailInput.trim();
//     if (trimmedEmail && !emails.includes(trimmedEmail)) {
//       setEmails((prevEmails) => [...prevEmails, trimmedEmail]);
//       setEmailInput('');
//     }
//   };

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleRemoveEmail = (emailToRemove) => {
//     setEmails((prevEmails) => prevEmails.filter((email) => email !== emailToRemove));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       handleAddEmail();
//     }
//   };

//   return (
//     <div>
//       <ul className="flex flex-wrap gap-2">
//         {emails.map((email, index) => (
//           <li
//             key={index}
//             className={`flex items-center gap-1 px-2 py-1 rounded-full text-white ${validateEmail(email) ? 'bg-primaryColC' : 'bg-red-500'}`}
//           >
//             <button
//               type="button"
//               aria-label={`Remove ${email}`}
//               onClick={() => handleRemoveEmail(email)}
//             >
//               <IoCloseSharp />
//             </button>
//             <span>{email}</span>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="email"
//         value={emailInput}
//         onChange={(e) => setEmailInput(e.target.value)}
//         onKeyPress={handleKeyPress}
//         placeholder="Add email"
//         className="w-full p-2 rounded outline-0 border-0"
//         aria-label="Email input"
//       />
//     </div>
//   );
// };

// EmailInput.propTypes = {
//   initialEmails: PropTypes.arrayOf(PropTypes.string),
// };

// EmailInput.defaultProps = {
//   initialEmails: [],
// };

// export default EmailInput;

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import { debounce } from 'lodash';

const EmailInput = ({ initialEmails, onChange }) => {
  const [emails, setEmails] = useState(initialEmails);
  const [emailInput, setEmailInput] = useState('');

  const handleAddEmail = () => {
    const trimmedEmail = emailInput.trim();
    if (trimmedEmail && !emails.includes(trimmedEmail)) {
      const newEmails = [...emails, trimmedEmail];
      setEmails(newEmails);
      setEmailInput('');
      onChange(newEmails); // Notify parent or perform any action on email list change
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRemoveEmail = (emailToRemove) => {
    const newEmails = emails.filter((email) => email !== emailToRemove);
    setEmails(newEmails);
    onChange(newEmails); // Notify parent or perform any action on email list change
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddEmail();
    }
  };

  const debouncedHandleChange = useCallback(
    debounce((value) => setEmailInput(value), 300), // Adjust delay as needed
    []
  );

  const handleChange = (e) => {
    debouncedHandleChange(e.target.value);
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {emails.map((email, index) => (
          <li
            key={index}
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-white ${validateEmail(email) ? 'bg-primaryColC' : 'bg-red-500'}`}
          >
            <button
              type="button"
              aria-label={`Remove ${email}`}
              onClick={() => handleRemoveEmail(email)}
            >
              <IoCloseSharp />
            </button>
            <span>{email}</span>
          </li>
        ))}
      </ul>
      <input
        type="email"
        value={emailInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Add email"
        className="w-full p-2 border-0 outline-0 rounded"
        aria-label="Email input"
      />
    </div>
  );
};

EmailInput.propTypes = {
  initialEmails: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

EmailInput.defaultProps = {
  initialEmails: [],
  onChange: () => {},
};

export default EmailInput;

