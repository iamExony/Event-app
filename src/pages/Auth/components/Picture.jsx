import { Link } from "react-router-dom";

const Picture = ({ src, height }) => {
  return (
    <div className="relative w-full h-screen">
      <Link to="/">
        <img
          src="/images/auth-logo.png"
          className="absolute top-[8%] left-[8%]"
          alt=""
        />
      </Link>

      <picture>
        <img
          src={`/images${src}`}
          className={`w-full object-cover ${height ? height : "h-screen"}`}
          alt=""
        />
      </picture>
    </div>
  );
};

export default Picture;
