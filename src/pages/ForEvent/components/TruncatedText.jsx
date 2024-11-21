import { useEffect, useState } from "react";

const TruncatedText = ({ title, verified }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [truncatedText, setTruncatedText] = useState(title);

  useEffect(() => {
    const elem = document.getElementById("myDiv");
    const rect = elem.clientWidth;

    // console.log(rect);
    const num = Math.floor(+rect / 14);
    // console.log(num);

    if (title.length > num) {
      setIsTruncated(true);
      setTruncatedText(title.slice(0, num) + "...");
    } else {
      setIsTruncated(false);
    }
  }, [title]);
  // console.log(truncatedText);

  return (
    <div className="flex items-center gap-[4.3px] " id="myDiv">
      <h4 className=" text-2xl font-medium inline">
        {isTruncated ? <span>{truncatedText}</span> : <span>{title}</span>}
      </h4>
      <img src={verified} alt="" />
    </div>
  );
};

export default TruncatedText;
