import { Continue, Back } from "../components/Buttons";

const PersonalInfo = ({
    email,
    lastName,
    firstName,
    phoneNumber,
    setStep,
    setEmail,
    setLastName,
    setFirstName,
    setPhoneNumber
}) => {
    return ( 
        <div className="w-2/5 py-8 px-16 flex flex-col gap-10 border border-formBorder rounded-lg">
            <input 
                type="text" 
                value={firstName}
                placeholder="First name"
                className="style-input w-full"
                onChange={e => setFirstName(e.target.value)}
            />

            <input 
                type="text" 
                value={lastName}
                placeholder="Last name"
                className="style-input w-full"
                onChange={e => setLastName(e.target.value)}
            />

            <input 
                type="email" 
                value={email}
                placeholder="Email address"
                className="style-input w-full"
                onChange={e => setEmail(e.target.value)}
            />

            <input 
                type="text" 
                value={phoneNumber}
                placeholder="Phone number"
                className="style-input w-full"
                onChange={e => setPhoneNumber(e.target.value)}
            />

            <div className="flex gap-4">
                <Back className="w-1/2 pointer-events-none">Back</Back>
                <Continue className="w-1/2" handleClick={() => setStep((step) => step + 1)}>Continue</Continue>
            </div>
        </div>
     );
}
 
export default PersonalInfo;