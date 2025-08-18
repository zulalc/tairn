import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center gap-4 py-4">
        <Logo />
        <NavSearch />
        <div className="hidden sm:flex gap-4 items-center ">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
