import { useState } from "react";
import { gallery } from "../../../utils/data";

const Gallery = () => {
  const [theImg, setTheImg] = useState(gallery[0]);

  const chosenImage1 = () => {
    setTheImg(gallery[0]);
  };
  const chosenImage2 = () => {
    setTheImg(gallery[1]);
  };
  const chosenImage3 = () => {
    setTheImg(gallery[2]);
  };
  const chosenImage4 = () => {
    setTheImg(gallery[3]);
  };
  const chosenImage5 = () => {
    setTheImg(gallery[4]);
  };

  return (
    <section className="py-20">
      <h2 className="text-center">Gallery section</h2>

      <div className="h-[680px] w-full">
        {+theImg.id ? (
          <img
            key={theImg.id}
            id={theImg.id}
            className={`mt-8 object-cover h-full w-full 
              
            `}
            src={theImg.largeImg}
            alt=""
          />
        ) : null}
      </div>

      <div className="flex gap-3 justify-center -mt-16 z-10 ">
        <img
          alt={`gallery-1`}
          src={gallery[0].smallImg}
          onClick={chosenImage1}
          className="w-[190px] h-[150px] object-cover hover:border-4 border-primaryCol rounded-2xl "
        />
        <img
          alt={`gallery-2`}
          src={gallery[1].smallImg}
          onClick={chosenImage2}
          className="w-[190px] h-[150px] object-cover hover:border-4 border-primaryCol rounded-2xl"
        />
        <img
          alt={`gallery-3`}
          src={gallery[2].smallImg}
          onClick={chosenImage3}
          className="w-[190px] h-[150px] object-cover hover:border-4 border-primaryCol rounded-2xl"
        />
        <img
          alt={`gallery-4`}
          src={gallery[3].smallImg}
          onClick={chosenImage4}
          className="w-[190px] h-[150px] object-cover hover:border-4 border-primaryCol rounded-2xl"
        />
        <img
          alt={`gallery-5`}
          src={gallery[4].smallImg}
          onClick={chosenImage5}
          className="w-[190px] h-[150px] object-cover hover:border-4 border-primaryCol rounded-2xl "
        />
      </div>
    </section>
  );
};

export default Gallery;
