import NavButton from "./NavButton";

function Nav() {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <NavButton>Home</NavButton>
        </li>
        <li>
          <NavButton>About us</NavButton>
        </li>
        <li>
          <NavButton>Products</NavButton>
        </li>
        <li>
          <NavButton>Contact us</NavButton>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
