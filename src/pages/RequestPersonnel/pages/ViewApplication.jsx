import { Link } from "react-router-dom";

const ViewApplication = ({ request }) => {
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
    additionalDetails,
  } = request;

  return (
    <div className="flex-group justify-between gap-8 w-1/2 my-4 mx-auto text-bodyText">
      <div>
        <h2 className="text-3xl font-semibold text-[#2255A0] mb-4">
          View request application
        </h2>
        <p>
          The event personnel will evaluate this request based on the
          information provided.
        </p>
      </div>

      <article className="flex-group gap-10 w-full">
        <div>
          <h2 className="text-2xl font-medium">Personal Information</h2>

          <div className="border border-borderGrey rounded-lg p-4 mt-4 flex-group gap-6">
            <div className="flex-group">
              <small>Name:</small>
              <span>
                {firstName} {lastName}
              </span>
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
              <span>{eventTheme}</span>
            </div>

            <div className="flex-group">
              <small>Provision:</small>
              <span>{provision}</span>
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
      </article>

      <Link
        to="/home/for-Events"
        className="w-full py-3 my-2 border bg-primaryCol text-White text-center rounded-md hover:bg-White hover:border-primaryCol hover:text-primaryCol"
      >
        Close section
      </Link>
    </div>
  );
};

export default ViewApplication;
