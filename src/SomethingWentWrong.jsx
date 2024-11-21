import React from "react";

const SomethingWentWrong = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '20%'}}>
      <h1 className="text-[30px]">Something went wrong</h1>
      <p>We are sorry for the inconvenience. Please try again later.</p>
      <button onClick={() => window.location.href = '/'}>Go back</button>
    </div>
  );
};

export default SomethingWentWrong;