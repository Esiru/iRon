import Link from "next/link";
import "./styles.modules.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <h1>iRon</h1>
        </Link>
      </div>
    </>
  );
}
