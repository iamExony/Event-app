import React from "react";
import { moreProjects } from "../../utils/data";
import Gallery from "./components/Gallery";
import CommentReview from "./components/commentsReview";

const Content = () => {
  return (
    <main className="portfolio">
      {/* banner */}
      <header className="my-10 px-[100px] max-w-[1440px] mx-auto h-[720px] relative">
        <div className="h-full w-full ">
          <img
            src="/images/portfolio/banner.png"
            className="h-full w-full relative rounded-2xl object-cover"
            alt="banner"
          />
        </div>

        <div className="absolute bottom-10 ml-10 text-formBorder">
          <h2 className="text-4xl">The VAGS Wedding 2023</h2>
          <p className="pt-2 pb-4">
            A detailed wedding event planning presentation
          </p>
          <div className="flex gap-5">
            <span className="py-1 px-4 bg-[#ffffff4d] rounded-md border border-white font-medium">
              Wedding
            </span>
            <span className="py-1 px-4 bg-[#ffffff4d] rounded-md border border-white font-medium">
              VAGS
            </span>
            <span className="py-1 px-4 bg-[#ffffff4d] rounded-md border border-white font-medium">
              Event planning
            </span>
          </div>
        </div>
      </header>
      {/* introduction and event specs */}
      <section>
        <article className="flex flex-col gap-24">
          <div className="  mt-16 align-middle text-center w-[90%] m-auto flex flex-col gap-2">
            <h2 className="font-semibold mb-4">
              The Event Type And Services Rendered
            </h2>
            <p className="text-xl">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem.
            </p>
          </div>
          <div className="h-[520px]">
            <img
              src="/images/portfolio/handsFashion.png"
              alt="fashion"
              className="h-full"
            />
          </div>
        </article>
        <article className="flex flex-row items-center gap-x-28 mt-24">
          <div className="  mt-16 align-middle text-center w-[90%] m-auto flex flex-col gap-2">
            <h2 className="font-semibold mb-4 whitespace-nowrap">Event Specifications</h2>
            <p className="text-xl">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem.
            </p>
          </div>
        </article>
      </section>
      {/* gallery section */}
      <Gallery />

      {/* comment and review */}
      <CommentReview />

      {/* more projects */}
      <section>
        <h2>More projects by Amanda Williams</h2>
        <div className="portfolio grid grid-cols-4 gap-5 pt-10 pb-40">
          {moreProjects.map(({ id, img, text, category }) => {
            return (
              <div key={id}>
                <img src={img} alt={text} className="cursor-grabbing mb-5" />
                <h3>{text}</h3>
                <span className="text-bodyText font-medium">{category}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Content;
