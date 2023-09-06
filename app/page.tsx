"use client";
import "@/styles/index.scss";
import Header from "@/section/Header";
import NavBar from "@/section/NavBar";
import Tech from "@/section/Tech";
import "./page.scss";
import Experience from "@/section/Experience";
import Education from "@/section/Education";
import { useMediaQuery } from "@/hooks/useMediaQuery";
const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <NavBar />
      <section className="rowdata">
        <Header />
        <Tech />
        <Experience />
        <Education />
      </section>
    </>
  );
};

export default Home;
