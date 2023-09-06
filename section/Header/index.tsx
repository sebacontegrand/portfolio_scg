/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import cv from "@/assets/img/365shots_so.png";
import "./Header.scss";
import papple from "@/assets/img/papple.jpeg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import code from "@/assets/img/618shots_so.png";
const Header = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <section id="onlyone">
      <div className="introduction">
        {isMobile ? (
          <div className="papple">
            <h1>Sebastián Conte-Grand </h1>
            <Image src={papple} alt="" />
          </div>
        ) : (
          <h1>Sebastián Conte-Grand </h1>
        )}
        <div className="aboutme">
          <span>ABOUT ME</span>
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
      {!isMobile ? (
        <Image className="cvshot" src={cv} alt="" height={600} />
      ) : (
        <Image
          className="code gradient-overlay"
          src={code}
          alt=""
          width={414}
        />
      )}
    </section>
  );
};

export default Header;
