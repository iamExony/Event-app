import { FormControl, TextField } from "@mui/material";

const GetEarlyAccess = () => {
  return (
    <section className="relative flex flex-col py-7 md:py-20 gap-5 justify-center items-center bg-white shadowBox md:ml-[100px] md:mr-[100px] -mb-20 z-25 mx-5 md:mx-0">
      <h3 className="text-3xl md:text-5xl font-bold text-navyBlack text-center">
        GET EARLY ACCESS
      </h3>
      <p className="md:text-xl font-normal">
        Be the first to know when we launch
      </p>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          gap: "1rem",
          marginTop: "2rem",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <TextField
          label="First name"
          type="text"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: {
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Euclid Circular A",
            },
          }}
          InputProps={{
            style: {
              borderRadius: ".5rem",
              outline: ".1rem solid #EAEAEA",
            },
          }}
          size="md"
        />

        <TextField
          label="Email address"
          type="text"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: {
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Euclid Circular A",
            },
          }}
          InputProps={{
            style: {
              borderRadius: ".5rem",
              outline: ".1rem solid #EAEAEA",
            },
          }}
          size="md"
        />
        <button className="flex w-full md:w-96 py-4  bg-primaryCol text-white rounded-md justify-center hover:bg-primaryHover">
          Join waitlist
        </button>
      </FormControl>
    </section>
  );
};
export default GetEarlyAccess;
