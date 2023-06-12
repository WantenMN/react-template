import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-20 w-full px-2 backdrop-blur border-b">
      <Link to="/">Header</Link>
    </header>
  );
};
export default Header;
