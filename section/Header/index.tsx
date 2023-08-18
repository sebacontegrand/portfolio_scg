/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import cv from "@/assets/img/365shots_so.png";
import "./Header.scss";

const Header = () => {
  return (
    <section id="onlyone">
      <div className="introduction">
        <h1>Sebastián Conte-Grand </h1>
        <div className="aboutme">
          <span>About me</span>
          <hr />
        </div>
        <h2>In my job it is important that...</h2>
        <h3>"I work with a team of people eager to learn."</h3>
        <h2> I am making a career change because...</h2>
        <h3>"I love the challenge of reinventing myself."</h3>
        <h2>I like to work with people who...</h2>
        <h3>
          "Teamwork is a strong skill and building teams was one of my important
          duties in my senior manager position."
        </h3>
        <div className="contact">
          <span>Contact</span>
          <hr />

          <h5>
            Email: sebacontegrand@gmail.com Mobile: (+54)92213648564
            https://github.com/sebacontegrand
            https://www.linkedin.com/in/sebastian-conte-grand Location: City
            Bell, Buenos Aires, Argentina
          </h5>
        </div>
      </div>
      <Image className="cvshot" src={cv} alt="" height={600} />
    </section>
  );
};

export default Header;
