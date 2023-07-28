import React from "react";

const FooterImgs = ({ path }) => {
  return (
    <div className="footerImgs d-flex justify-content-center align-items-center">
      <img src={path} alt="footer" />
    </div>
  );
};

export default FooterImgs;
