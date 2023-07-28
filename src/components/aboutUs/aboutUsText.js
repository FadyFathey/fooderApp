import React from "react";
import signature from "../imgs/signature.png";
const AboutUsText = () => {
  return (
    <div id="about" className="thirdSecText thirdSecPuplic">
      <span>Sir Slice's Heritage</span>
      <h2>Serving Pizzas By The Slice Since 1987</h2>
      <p>
        "We've been serving delicious pizzas by the slice since 1987. Our
        company has been providing top-quality printing and typesetting services
        for decades, making us a trusted name in the industry."
      </p>
      <img src={signature} alt="signature" />
    </div>
  );
};

export default AboutUsText;
