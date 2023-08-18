/* eslint-disable react/no-unescaped-entities */
import "./Education.scss";
import Image from "next/image";
import ypf from "@/assets/img/ypf.png";
import umoob from "@/assets/img/Umoob_Business_Imagotipo_Horizontal.png";
const Education = () => {
  return (
    <section className="work">
      <div className="education">
        <h2>WORK</h2>
        <hr />

        <figure className="logos">
          <Image src={ypf} alt="" width={100} />
          <Image src={umoob} alt="" width={100} />
        </figure>
      </div>
      <h2>
        Front End -Web Developer- www.umoob.com - Landing page development :
      </h2>
      <h3>
        Jul—2023 • Built with Nextjs for optimal performance and server-side
        rendering. • Utilizes SASS for advanced styling and theme capabilities.
        • Features responsive web design for seamless user experience across
        devices. • Ensures fast load times and modern aesthetics for engaging
        user interactions.
      </h3>
      <h2>Front End -Web Developer - Sports App. Mobile and Desktop Web : </h2>

      <h3>
        "Ene—Jul 2023 • Uses React with TypeScript for type-safe component
        development. • Integrates Storybook for interactive UI component
        documentation. • Allows for isolated component testing and design
        consistency. • Streamlines the development-to-documentation workflow for
        teams."
      </h3>
      <h2>Senior Sales Manager</h2>
      <h3>
        YPF • 1996-2020. I worked 25 years in the Oil&Gas industry fulfilling
        different responsibilities in YPF, I worked in the evaluation of
        commercial and corporate entry into the Mexican lubricants market and
        the last one the development of the Mining business in San Juan,
        managing to capture new net revenue sales for the company for US$20 MUSD
        and leading a team of 40 administrative and mining operations people
        with important logistics contracts and service providers.
      </h3>
    </section>
  );
};

export default Education;
