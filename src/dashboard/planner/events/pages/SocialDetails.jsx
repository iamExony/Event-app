import React, { useEffect, useState } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdMeetingRoom } from "react-icons/md";
import { Back, Continue } from "../../../components/Buttons";
import SelectTag from "../../../components/SelectTag";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";
import { uploadFileOnCloudinary } from "./../../../../dashboard/components/uploadFileToCloudinary/uploadToCloudinary";

const SocialDetails = ({
  font,
  color,
  setStep,
  twitter,
  website,
  coverArt,
  facebook,
  instagram,
  setFont,
  setColor,
  setTwitter,
  setWebsite,
  setCoverArt,
  setFacebook,
  setInstagram,
  virtualLink,
  setVirtualLink,
}) => {
  const defaultSrc = "/images/dashboard/cover-art.png";
  const [uploadStatus, setUploadStatus] = useState(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!coverArt) {
      setCoverArt(defaultSrc);
    }
  }, [coverArt]);

  const handleFile = async (e) => {
    setImageIsLoading(true);
    const file = e.target.files[0];
    try {
      const response = await uploadFileOnCloudinary(file);
      setUploadStatus(
        response.success ? "Upload successful!" : "Upload failed"
      );
      setCoverArt(response?.dataReturned.url);
      setErrors((prevErrors) => ({ ...prevErrors, coverArt: "" }));
      setImageIsLoading(false);
    } catch (error) {
      setUploadStatus("Upload failed");
      console.error("Error uploading file:", error);
      setImageIsLoading(false);
    }
  };

  const handleChange = (color) => {
    setColor(color.hex);
    setErrors((prevErrors) => ({ ...prevErrors, color: "" }));
  };

  const validateFields = () => {
    const newErrors = {};

    // if (!facebook) newErrors.facebook = "Facebook profile link is required.";
    // if (!instagram) newErrors.instagram = "Instagram page link is required.";
    // if (!twitter) newErrors.twitter = "Twitter profile link is required.";
    // if (!website) newErrors.website = "Website link is required.";
    if (!coverArt || coverArt === defaultSrc)
      newErrors.coverArt = "Cover art is required.";
    if (!color) newErrors.color = "Display color is required.";
    if (!font) newErrors.font = "Font type is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateFields()) {
      setStep((step) => step + 1);
    }
  };

  return (
    <div className="border border-borderGrey rounded-lg text-bodyText w-full">
      <h3 className="text-2xl font-medium p-4 border-b border-[#2D2C2C26]">
        Social Details
      </h3>

      <div className="flex-group gap-16 p-4 md:p-8 h-screen overflow-y-scroll">
        <div className="flex-group gap-6">
          <div className="flex items-center gap-4 border rounded-md">
            <IoLogoFacebook className="text-Blue text-3xl ml-3" />
            <input
              type="text"
              value={facebook}
              onChange={(e) => {
                setFacebook(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, facebook: "" }));
              }}
              placeholder="Enter your Facebook profile link"
              className="p-4 w-full outline-none border-l"
            />
          </div>
          {errors.facebook && <p className="text-red-500">{errors.facebook}</p>}

          <div className="flex items-center gap-4 border rounded-md">
            <IoLogoInstagram className="text-Blue text-3xl ml-3" />
            <input
              type="text"
              value={instagram}
              onChange={(e) => {
                setInstagram(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, instagram: "" }));
              }}
              placeholder="Enter your Instagram page link"
              className="p-4 w-full outline-none border-l"
            />
          </div>
          {errors.instagram && (
            <p className="text-red-500">{errors.instagram}</p>
          )}

          <div className="flex items-center gap-4 border rounded-md">
            <IoLogoTwitter className="text-Blue text-3xl ml-3" />
            <input
              type="text"
              value={twitter}
              onChange={(e) => {
                setTwitter(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, twitter: "" }));
              }}
              placeholder="Enter your Twitter profile"
              className="p-4 w-full outline-none border-l"
            />
          </div>
          {errors.twitter && <p className="text-red-500">{errors.twitter}</p>}

          <div className="flex items-center gap-4 border rounded-md">
            <TbWorld className="text-Blue text-3xl ml-3" />
            <input
              type="text"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, website: "" }));
              }}
              placeholder="Enter your website link"
              className="p-4 w-full outline-none border-l"
            />
          </div>
          {errors.website && <p className="text-red-500">{errors.website}</p>}

          <div className="flex items-center gap-4 border rounded-md">
            <MdMeetingRoom className="text-Blue text-3xl ml-3" />
            <input
              type="text"
              value={virtualLink}
              onChange={(e) => {
                setVirtualLink(e.target.value);
                setErrors((prevErrors) => ({ ...prevErrors, virtualLink: "" }));
              }}
              placeholder="Enter your meeting link"
              className="p-4 w-full outline-none border-l"
            />
          </div>
          {errors.virtualLink && <p className="text-red-500">{errors.virtualLink}</p>}
        </div>

        <div>
          <p className="mb-8">Event cover art</p>

          {!imageIsLoading ? (
            <div className="grid place-items-center gap-8">
              <input
                hidden
                id="art"
                type="file"
                accept="image/*"
                onChange={handleFile}
              />

              <img
                src={coverArt}
                alt="Add Cover Art"
                className="cursor-pointer"
              />
              {errors.coverArt && (
                <p className="text-red-500">{errors.coverArt}</p>
              )}

              <p className="md:w-1/2 text-center">
                We recommend uploading an artwork of at least 1400x1400 pixels
                and maximum 5MB. We support jpg, png, gif, and tiff formats.
              </p>

              <label
                htmlFor="art"
                aria-label="button"
                className="bg-primaryCol py-3 px-12 rounded-md text-white border hover:border-primaryCol hover:bg-transparent hover:text-primaryCol cursor-pointer"
              >
                Upload image
              </label>
              {uploadStatus && <p>{uploadStatus}</p>}
            </div>
          ) : (
            <div className="w-full h-[250px] text-center flex justify-center items-center border bg-[#919191] animate-pulse">
              Loading image...
            </div>
          )}
        </div>

        <div className="w-full">
          <p>Text color</p>
          <ChromePicker
            color={color}
            onChange={handleChange}
            disableAlpha
            className="mt-3 mx-auto"
          />
          {errors.color && <p className="text-red-500">{errors.color}</p>}
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, color: "" }));
            }}
            placeholder="Enter hex code"
            className="style-input w-full mt-8"
          />
        </div>

        <div>
          <p>Font type</p>
          <SelectTag
            value={font}
            text="#4B4B4B"
            background="#FFB198"
            handleSelect={(value) => {
              setFont(value);
              setErrors((prevErrors) => ({ ...prevErrors, font: "" }));
            }}
            className="w-full mt-3"
            defaultValue="Select font type"
            options={["Sans", "Sans-serif"]}
          />
          {errors.font && <p className="text-red-500">{errors.font}</p>}
        </div>

        <div className="self-end flex flex-col md:flex-row gap-4 mt-20 w-full md:w-auto">
          <Back handleClick={() => setStep((step) => step - 1)}>Back</Back>
          <Continue handleClick={handleContinue}>Continue</Continue>
        </div>
      </div>
    </div>
  );
};

SocialDetails.propTypes = {
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setStep: PropTypes.func.isRequired,
  twitter: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  coverArt: PropTypes.string,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  setFont: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
  setTwitter: PropTypes.func.isRequired,
  setWebsite: PropTypes.func.isRequired,
  setCoverArt: PropTypes.func.isRequired,
  setFacebook: PropTypes.func.isRequired,
  setInstagram: PropTypes.func.isRequired,
};

export default SocialDetails;
