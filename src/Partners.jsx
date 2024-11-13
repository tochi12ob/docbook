import React from 'react';
import logo1 from "./assets/logo1.svg"
import logo2 from "./assets/logo2.svg"
import logo3 from "./assets/logo3.svg"
import logo4 from "./assets/logo4.svg"
import logo5 from "./assets/logo5.svg"
import logo6 from "./assets/logo6.svg"

function Partners() {
  const partners = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="partners-section">
      {partners.map((logo, index) => (
        <img key={index} src={logo} alt={`${logo} logo`} className="partner-logo" />
      ))}
    </section>
  );
}

export default Partners;
