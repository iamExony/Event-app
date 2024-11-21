import StarRating from "../../../components/StarRating";
import { portfolioComments } from "../../../utils/data";

const CommentReview = () => {
  return (
    <section className="flex gap-5 pt-20 pb-40">
      {/* comment */}
      <div className="bg-inputBg rounded-lg border-2 border-solid border-[#CCD1D4] p-10 flex-[60%]">
        <header className="flex justify-between items-center">
          <h3>Comments</h3>
          <button className="text-xl text-primaryCol">See all</button>
        </header>
        <div className="flex flex-col gap-10 py-10">
          {portfolioComments.map((text, i) => {
            return (
              <div key={i}>
                <div className="flex gap-4 max-w-fit items-center">
                  <img
                    src="./images/portfolio/johnDoe.png"
                    alt="John Doe"
                    className="w-14"
                  />
                  <div className="-mt-1">
                    <h4>John Doe</h4>
                    <p className="text-bodyText text-sm">
                      Posted 2 minutes ago
                    </p>
                  </div>
                </div>
                <p className="mt-4">{text}</p>
              </div>
            );
          })}
        </div>
        {/* input field */}
        <div className="flex gap-3 items-center">
          <img src="/images/portfolio/girl.png" alt="" className="w-[56px]" />
          <input
            type="text"
            className="bg-transparent border-[1px] border-solid border-[#EAEAEA] p-3 rounded-lg flex-[60%]"
            placeholder="Write a comment on this project"
          />
          <button className="bg-primaryCol py-3 px-8 text-white rounded-lg">
            Post
          </button>
        </div>
      </div>
      {/* review */}
      <article className="bg-inputBg rounded-lg border-2 border-solid border-[#CCD1D4] p-10 flex-[40%]">
        <h3>Review from event host</h3>
        <div className="flex gap-5 max-w-max items-center py-10">
          <img
            src="./images/portfolio/johnDoe.png"
            alt="John Doe"
            className="w-20"
          />
          <div>
            <StarRating active={4} className="text-xl" />
            <h4>John Doe</h4>
            <p className="text-bodyText">Posted on 19 Jun 2023</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <h5>Professionalism</h5>
            <StarRating active={4} />
            <span className="font-medium -mt-3 ml-1">4.8</span>
          </div>
          <div>
            <h5>Flexibility</h5>
            <StarRating active={4} />
            <span className="font-medium -mt-3 ml-1">4.8</span>
          </div>
          <div>
            <h5>Creativity</h5>
            <StarRating active={4} />
            <span className="font-medium -mt-3 ml-1">4.8</span>
          </div>
          <div>
            <h5>Communication</h5>
            <StarRating active={4} />
            <span className="font-medium -mt-3 ml-1">4.8</span>
          </div>
        </div>
        <p className="pt-6 text-base">
          The wedding was a huge success thanks to [event planner's name] and
          her team. Our guests were absolutely blown away by the stunning
          setting, the exceptional service, and the overall experience. I would
          highly recommend [event planner's name] to anyone looking for a
          talented and dedicated event planner. She truly made our wedding day a
          dream come true{" "}
        </p>
      </article>
    </section>
  );
};
export default CommentReview;
