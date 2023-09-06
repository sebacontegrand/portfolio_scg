import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import Image from "next/image";
import photoId from "@/assets/img/402shots_so.png";
import "./NavBar.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
const Home = () => {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("onlyone");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {!isMobile ? (
        <Navbar className="navbar">
          <NavbarContent className="navbar__contenido">
            <NavbarBrand>
              <h2>Portfolio</h2>
            </NavbarBrand>
            <NavbarContent>
              <NavbarItem>
                <Link href="https://www.github.com/sebacontegrand">Github</Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="https://www.linkedin.com/in/sebastian-conte-grand">
                  LinkedIn
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link onClick={handleAboutClick}>About Me</Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent>
              <Image src={photoId} alt="" height={150} />
            </NavbarContent>
          </NavbarContent>
        </Navbar>
      ) : (
        <Navbar className="navbarmobile">
          <NavbarBrand>
            <h2>Portfolio</h2>
          </NavbarBrand>
        </Navbar>
      )}
    </>
  );
};
export default Home;
