import "./Tech.scss";
import Image from "next/image";
import next from "@/assets/img/next.png";
import sass from "@/assets/img/sass.jpeg";
import node from "@/assets/img/node.png";
import js from "@/assets/img/js.jpeg";
import slack from "@/assets/img/slack.jpeg";
import typw from "@/assets/img/typw.png";
import jira from "@/assets/img/jira.png";
import storybook from "@/assets/img/storybook.png";
import express from "@/assets/img/express.png";
import figma from "@/assets/img/figma.png";
import html from "@/assets/img/html5-css3.webp";
import css from "@/assets/img/css.jpeg";
const Tech = () => {
  return (
    <section className="tech-cards">
      <div className="education">
        <h2>TECH</h2>
        <hr />
      </div>
      <figure className="grid-box">
        <Image src={next} alt="" />
        <Image src={sass} alt="" />
        <Image src={node} alt="" />
        <Image src={js} alt="" />
        <Image src={slack} alt="" />
        <Image src={typw} alt="" />
        <Image src={jira} alt="" />
        <Image src={storybook} alt="" />
        <Image src={express} alt="" />
        <Image src={figma} alt="" />
        <Image src={html} alt="" />
        <Image src={css} alt="" />
      </figure>
    </section>
  );
};

export default Tech;
