import SelectInput from "../components/Select";
import { Continue, Back } from "../components/Buttons";
import MultiSelect from "../../../components/MultiSelect";

const Specifications = ({
  eventTheme,
  provision,
  description,
  budgetRange,
  additionalDetails,
  setStep,
  setEventTheme,
  setProvision,
  setDescription,
  setBudgetRange,
  setAdditionalDetails,
}) => {
  const provisions = [
    "DJ",
    "Live band",
    "Event centre",
    "Event planning",
    "Decoration",
    "Make-up",
    "Fashion design",
    "Pedicure and manicure",
    "Catering",
    "Photogrphy",
    "Accommodation",
    "Brand design",
    "Transportation",
    "Modelling",
    "Event security",
    "Religious clerics",
    "Bartender/drink services",
    "Image Styling",
  ];
  const themes = [
    "African culture",
    "Halloween",
    "Islamic",
    "Christian",
    "Contemporary",
    "Entertainment",
    "Educational",
    "Teenagers",
    "Young adults",
    "Outdoor",
    "Indoor",
    "Remembrance",
    "Civil society and empowerment",
    "Political groups",
    "Women empowerment",
    "Excellence and success",
    "Business and leadership",
  ];

const budgetRangeList = ['< 20,000','20,000 - 40,000', '41,000 - 60,000', '61,000 - 100,000', '101,000 - 150,000', '151,000 - 200,000', '201,000 - 250,000', '251,000 - 300,000', '301,000 - 400,000', ' 401,000 - 500,000', '501,000 - 1,000,000', '> 1,000,000']


  return (
    <div className="w-2/5 py-8 px-16 flex flex-col gap-10 border border-formBorder rounded-lg">
      <MultiSelect
        className="w-full"
        theme={eventTheme}
        setTheme={setEventTheme}
        themeList={themes}
        title={"Event themes"}
      />

      <MultiSelect
        className="w-full"
        theme={provision}
        setTheme={setProvision}
        themeList={provisions}
        title={"Select provision"}
      />

      <textarea
        rows="3"
        value={description}
        className="style-input w-full"
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <SelectInput
        value={budgetRange}
        className="w-full"
        options={budgetRangeList}
        handleSelect={setBudgetRange}
        defaultValue="Budget range"
      />

      <textarea
        rows="8"
        value={additionalDetails}
        className="style-input w-full"
        placeholder="Additional details"
        onChange={(e) => setAdditionalDetails(e.target.value)}
      />

      <div className="flex gap-4 mt-20">
        <Back className="w-1/2" handleClick={() => setStep((step) => step - 1)}>
          Back
        </Back>
        <Continue
          className="w-1/2"
          handleClick={() => setStep((step) => step + 1)}
        >
          Continue
        </Continue>
      </div>
    </div>
  );
};

export default Specifications;
