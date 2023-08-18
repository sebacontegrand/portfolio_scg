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
import scg from "../../assets/img/217shots_so.png";
import "./NavBar.scss";
const Home = () => {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("onlyone");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
      </NavbarContent>

      <NavbarContent>
        <Dropdown placement="bottom-end">
          <DropdownTrigger className="avatar">
            <Image className="shot" src={scg} alt="" width={300} height={200} />
          </DropdownTrigger>
          <DropdownMenu className="dropdown">
            <DropdownItem key="profile" className="h-20 gap-4">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">sebacontegrand@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Works</DropdownItem>
            <DropdownItem key="team_settings">Experiences</DropdownItem>
            <DropdownItem key="analytics">Studies</DropdownItem>
            <DropdownItem key="system">About me</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Contact</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
export default Home;
