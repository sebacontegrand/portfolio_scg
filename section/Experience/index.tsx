import "./Experience.scss";
import react from "@/assets/img/react.png";
import Image from "next/image";
import unlp from "@/assets/img/unlp.jpeg";
import ucema from "@/assets/img/ucema.jpeg";
import austral from "@/assets/img/austral.png";
const index = () => {
  return (
    <section className="experience">
      <div className="education">
        <h2>EDUCATION</h2>
        <hr />
        <figure className="logos">
          <Image src={react} alt="" />
          <Image src={unlp} alt="" />
          <Image src={ucema} alt="" />
          <Image src={austral} alt="" />
        </figure>

        <h3>Full Stack Developer- Soy Henry - 2022</h3>

        <h3>Management- Universad Austral - 2006-2007</h3>
        <h3>Master Degree in Business- UCEMA - 2000-2002</h3>
        <h3>Aeronautical Engineer -UNLP- 1988-1994</h3>
        <hr />
        <h5>
          I STUDIED AERONAUTICAL ENGINEERING, HAVE A MASTER DEGREE IN BUSINESS |
          I WORK 25 YEARS FOR AN OIL COMPANY IN ARGENTINA, YPF S.A. I AM IN THE
          PROCESS OF REBUILDING MY RESUME AND MY NEW SETS OF SKILLS, ITERATING
          ON SELFIMPROVEMENT HAS BEEN A LIFE GOAL. I WILL KEEP LEARNING AND
          SURPRISE MYSELF WITH TECHNOLOGY. ASK ME ABOUT TENNIS OR JAVASCRIPT.
        </h5>
      </div>
      <div className="skills">
        <h2>SKILLS</h2>
        <hr />
        <h3>
          Creative thinking, problem solving, teamwork, communication and
          autonomy.
        </h3>
      </div>
      <div className="languages">
        <h2>LANGUAGES</h2>
        <hr />
        <h3>• English: C2 Advanced • French: fluent spoken and written.</h3>
      </div>
    </section>
  );
};

export default index;
