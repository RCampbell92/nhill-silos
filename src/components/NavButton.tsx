interface Props {
  children: string;
}

function NavButton({ children }: Props) {
  return (
    <div className="nav-button">
      <button>{children}</button>
    </div>
  );
}

export default NavButton;
