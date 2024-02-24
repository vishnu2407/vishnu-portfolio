import { Link } from "react-scroll";
import { useState } from "react";

export default function HeroSection() {
  const [, setNavActive] = useState(false);

  // const toggleNav = () => {
  //   setNavActive(!navActive);
  //navActive
  // };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vishnu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Java Backend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm a Java Backend Developer, love to explore new technologies and build web applications,
            always looking to Upskill myself and contribute to open source community.
          </p>
        </div>
        <div style={{marginTop: "2rem"}} className="hero--section--btn">
        <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        width={100}
        height={100}
        
        to="mySkills"
        className="btn btn-outline-primary">
          Skills
      </Link>
      </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/VishnuVardhan.png" alt="Hero Section" />
      </div>
    </section>
  );
}
