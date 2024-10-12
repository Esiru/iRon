import Link from "next/link";
import "./styles.modules.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <h3>iRon</h3>
        </Link>
      </div>
    </>
  );
}
