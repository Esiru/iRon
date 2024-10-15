import Link from "next/link";
import "./styles.modules.css";
import { FaListCheck, FaPlus, FaUser } from "react-icons/fa6"

const loggedIn = true;

export default function Navbar() {

  const navbarLoggedIn = {
      backgroundColor: "#1d3d72",
      color: "#b6ffff",
      fontSize: "2rem",
      height: "7.5vh",
      width: "100vw",
      display: loggedIn === true ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "space-around",
      overflow: "hidden",
      position: "fixed",
      bottom: "0",
      zIndex: "1",
  }

  return (
    <>
      <div className="navbar" style={navbarLoggedIn}>
        <div className="log-page-button">
          <Link href=""><FaListCheck /></Link>
        </div>
        <div className="home-page-button">
          <Link href="/"><FaPlus /></Link>
        </div>
        <div>
          <Link href="/login"><FaUser /></Link>
          
        </div>
      </div>
    </>
  );
}
