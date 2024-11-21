import { Continue, Back } from "../components/Buttons";

const Review = ({ request, setStep }) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        eventType,
        eventLocation,
        guestsNumber,
        eventDate,
        eventTheme,
        provision,
        description,
        budgetRange,
        additionalDetails
    } = request

    const themes = eventTheme.length > 0 ? eventTheme.map( (theme, i) => theme === eventTheme[eventTheme.length -1] ? theme : theme + ', ' ) : []
    const provisions = provision.length > 0 ? provision.map((prov) => prov === provision[provision.length -1] ? prov : prov + ', ') : []

    return ( 
        <div className="w-1/2 flex-group gap-10 mb-6">
            <div>
                <h2 className="text-2xl font-medium">Personal Information</h2>

                <div className="border border-borderGrey rounded-lg p-4 mt-4 flex-group gap-6">
                    <div className="flex-group">
                        <small>Name:</small>
                        <span>{firstName} {lastName}</span>
                    </div>

                    <div className="flex-group">
                        <small>Email address:</small>
                        <span>{email}</span>
                    </div>

                    <div className="flex-group">
                        <small>Phone number:</small>
                        <span>{phoneNumber}</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-medium">Event details</h2>

                <div className="border border-borderGrey rounded-lg p-4 mt-4 flex-group gap-6">
                    <div className="flex-group">
                        <small>Type of event:</small>
                        <span>{eventType}</span>
                    </div>

                    <div className="flex-group">
                        <small>Event location:</small>
                        <span>{eventLocation}</span>
                    </div>

                    <div className="flex-group">
                        <small>Number of guests:</small>
                        <span>{guestsNumber}</span>
                    </div>

                    <div className="flex-group">
                        <small>Date of event:</small>
                        <span>{eventDate}</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-medium">Event specifications</h2>

                <div className="border border-borderGrey rounded-lg p-4 mt-4 flex-group gap-6">
                    <div className="flex-group">
                        <small>Event theme:</small>
                        <span>{themes}</span>
                    </div>

                    <div className="flex-group">
                        <small>Provision:</small>
                        <span>{provisions}</span>
                    </div>

                    <div className="flex-group">
                        <small>Event description:</small>
                        <span>{description}</span>
                    </div>

                    <div className="flex-group">
                        <small>Budget range:</small>
                        <span>{budgetRange}</span>
                    </div>

                    <div className="flex-group">
                        <small>Additional details:</small>
                        <span>{additionalDetails}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <Back className="w-[30%]" handleClick={() => setStep((step) => step - 1)}>Back</Back>
                <Continue className="w-[30%]" handleClick={() => setStep((step) => step + 1)}>Submit</Continue>
            </div>
        </div>
     );
}
 
export default Review;