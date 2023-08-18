"use client";
import "@/styles/index.scss";
import Header from "@/section/Header";
import NavBar from "@/section/NavBar";
import Tech from "@/section/Tech";
import "./page.scss";
import Experience from "@/section/Experience";
import Education from "@/section/Education";
const Home = () => {
  return (
    <main>
      <NavBar />
      <section className="rowdata">
        <Header />
        <Tech />
        <Experience />
        <Education />
      </section>
    </main>
  );
};

export default Home;
