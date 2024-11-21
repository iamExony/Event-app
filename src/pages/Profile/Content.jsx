import {
  services,
  portfolio,
  reviewsPhotos,
  workRatings,
  reviewComments,
} from "../../utils/data";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone, BsHeart, BsHeartFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import StarRating from "../../components/StarRating";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";

const Content = () => {
  const [isLoveProfile, setIsLoveProfile] = useState(false);
  const [isReadAll, setIsReadAll] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  const toogleLoveProfile = () => {
    setIsLoveProfile(!isLoveProfile);
  };

  const toggleRead = () => {
    setIsReadAll(!isReadAll);
  };
  return (
    <main className="profile">
      <div className="relative max-w-[1440px] mx-auto">
        <img src="/images/profile/cover.png" alt="cover-pic" width="100%" />
        <span
          onClick={toogleLoveProfile}
          className="cursor-pointer absolute right-[10%] top-[10%] transition-all bg-white rounded-full h-9 w-9 grid place-content-center p-1 pb-2"
        >
          {isLoveProfile ? (
            <BsHeartFill className="text-primaryCol translate-y-1" size={20} />
          ) : (
            <BsHeart className="text-primaryCol translate-y-1" size={20} />
          )}
        </span>
      </div>
      {/* profile intro */}
      <section className="relative">
        <img
          src="/images/profile/amanda.png"
          alt="amanda williams"
          className="w-[140px] absolute -top-9"
        />
        <div>
          <div className="flex items-end justify-between ml-[170px] pt-1 pb-12">
            <div>
              <h3 className="capitalize my-[18px] text-2xl ">
                amanda williams
              </h3>
              <span className="bg-[#df360233] py-2 px-4 border-2 rounded-lg border-primaryCol text-primaryCol  font-medium mr-[10px] ">
                Event planner
              </span>{" "}
              <CiLocationOn className="inline text-2xl" /> Lagos, Nigeria
            </div>
            <div>
              Replies within: <span className="text-primaryCol">5 hours</span>
              <Link to={'/home/request'} className="bg-[#0077c2] rounded-lg py-[10px] px-5 text-white ml-4 font-medium hover:bg-[#0c64ab]">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* about and contact info */}
      <section className="bio flex pt-10 pb-20 gap-5 items-center">
        <article className="p-5 flex-[70%] flex flex-col gap-10">
          <div>
            <h3 className="mb-3">About</h3>
            <p>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl
            </p>
          </div>
          <div>
            <h3 className="mb-3">Services</h3>
            <div className="flex gap-3 flex-wrap">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="border-2 rounded-lg border-primaryCol py-1 px-4 text-primaryCol font-medium capitalize text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </article>
        <article className="contact-info p-5 flex-[30%] flex flex-col gap-10">
          <div>
            <h3 className="mb-3">Contact Information</h3>
            <ul className="w-[100%] flex flex-col gap-3 cursor-pointer">
              <li className="flex justify-between">
                <span>Phone number</span>
                <span className="text-primaryCol" onClick={() => setShowNumber(!showNumber)}>

               {!showNumber ? <BsTelephone className="text-xl" /> : '09087654321'}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Email</span>
                <span className="text-primaryCol" onClick={() => setShowEmail(!showEmail)}>
                {!showEmail ?<HiOutlineMail className=" text-xl" /> : 'amanda426@gmail.com'}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Website</span>
                <span className="text-primaryCol" onClick={() => setShowWebsite(!showWebsite)}>
               {!showWebsite ? <TbWorldWww className=" text-xl" /> : 'www.justamanda.com'}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3">Overall rating</h3>
            <StarRating active={4} className="text-2xl" />
          </div>
        </article>
      </section>
      {/* portfolio */}
      <section>
        <h2>Portfolio</h2>
        <div className="portfolio grid grid-cols-4 gap-5 pt-10 pb-20">
          {portfolio.map(({ id, img, text, category }) => {
            return (
              <Link to={`/home/portfolio/:${text.toLowerCase()}`}>
                <div key={id}>
                  <img src={img} alt={text} className="cursor-grabbing mb-5" />
                  <h3>{text}</h3>
                  <span className="text-bodyText font-medium">{category}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      {/* reviews */}
      <section className="reviewsb pb-44">
        <header className="flex justify-between">
          <h2>Reviews(449)</h2>
          <button className="border-primaryCol border-[1px] rounded-lg py-1 px-4 text-primaryCol font-medium hover:bg-primaryCol hover:text-white">
            Write a review
          </button>
        </header>
        {/* ratings */}
        <div className="pt-10 pb-[64px] flex items-center gap-10">
          <div className="border-2 border-bodyText rounded-lg pt-2 px-[13px] pb-[14px] w-[148px] h-[118px] text-center">
            <h2>4.6</h2>
            <StarRating active={4} className="text-base" />
            <p className="text-bodyText">449 ratings</p>
          </div>
          <div className="inline-grid grid-cols-5 gap-5">
            {workRatings.map(({ id, title, rating }) => {
              return (
                <div key={id} className="bg-inputBg rounded-lg py-4 px-5">
                  <h4>{title}</h4>
                  <div className="flex gap-2 items-center">
                    <StarRating
                      active={Math.floor(rating)}
                      className="text-2xl"
                    />
                    <span className="font-medium">{rating}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* review photos */}
        <div>
          <h3>Reviews photos</h3>
          <div className="review-photos grid grid-cols-6 gap-5 pt-10 pb-20 relative">
            {reviewsPhotos.slice(0, 6).map((img, index) => {
              return <img key={index} src={img} alt={`photo-${index + 1}`} />;
            })}
            {reviewsPhotos.length > 6 && (
              <div className="absolute text-[#F7FBFD] font-semibold text-3xl right-20 top-24">{`+${
                reviewsPhotos.length - 6
              }`}</div>
            )}
          </div>
        </div>
        {/* review comments */}
        <div>
          <div className="flex items-center justify-between">
            <div className="text-xl">
              <span className="text-[#55656F] mr-3">Sort by:</span>
              <select name="filter" id="filter">
                <option value="highest">Highest rating</option>
              </select>
            </div>
            <Link className="text-primaryCol font-medium" to="/home/reviews">
              View more reviews
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-5 py-10">
            {reviewComments.map(
              ({ id, rating, event, username, time, comment }) => {
                return (
                  <article key={id} className="p-4 border-2 border-[#CCD1D4]">
                    <StarRating active={rating} />
                    <h4>{event}</h4>
                    <p className="font-medium text-bodyText">
                      {username} reviewed on {time}
                    </p>
                    <p className="mt-5 text-bodyText">
                      {`${isReadAll ? comment : comment.slice(0, 150) + "..."}`}
                      <button
                        className="text-primaryCol font-medium cursor-pointer"
                        onClick={toggleRead}
                      >{`${isReadAll ? "Read less" : "Read more"}`}</button>
                    </p>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
