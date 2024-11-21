import { workRatings, fullReview } from "../../utils/data";
import StarRating from "../../components/StarRating";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="reviews">
      <header className="flex justify-between py-20 px-[100px] max-w-[1440px] mx-auto">
        <h2 className="text-bodyText">Amanda Williams Reviews</h2>
        <button className="rounded-lg py-1 px-4 font-medium bg-primaryCol text-white hover:bg-primaryHover">
          Write a review
        </button>
      </header>
      {/* ratings */}
      <section className="pb-20 flex items-center gap-10">
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
      </section>
      {/* comments */}
      <section className="pb-24">
        <div className="flex justify-between items-center text-xl">
          <div>
            <span className="text-[#55656f]">Filter by:</span>
            <span className="border-[1px] border-[#eaeaea] rounded-lg ml-3 p-3">
              <select name="filter" id="filter">
                <option value="all">All ratings</option>
              </select>
            </span>
          </div>
          <div>
            <span className="text-[#55656f] mr-3">Sort by:</span>
            <select name="filter" id="filter">
              <option value="all">Highest rating</option>
            </select>
          </div>
        </div>
        <article className="py-20 grid gap-14">
          {fullReview.map(
            ({ id, rating, event, username, time, comment, images }) => {
              return (
                <div key={id} className="grid gap-2">
                  <StarRating active={rating} />
                  <h4 className="text-xl">{event}</h4>
                  <p className="font-medium text-bodyText">
                    {username} reviewed on {time}
                  </p>
                  <p className="mt-2">{comment}</p>
                  {images && (
                    <Link to={"/home/portfolio"}>
                      <div className="grid grid-cols-6 gap-5 pt-4">
                        {images.map((img, index) => {
                          return (
                            <img
                              key={index}
                              src={img}
                              alt={`photo-${index + 1}`}
                            />
                          );
                        })}
                      </div>{" "}
                    </Link>
                  )}
                </div>
              );
            }
          )}
        </article>
      </section>
    </main>
  );
};

export default Content;
