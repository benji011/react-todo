import { FormEvent } from "react";
import Button from "./Button";
import { IHeader } from "../models/props/IHeader";

const Header = (props: IHeader) => {
  const onClick = (e: FormEvent) => {
    console.log(e.target);
  };

  const { title } = props;
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

// CSS Custom styles in JS
// const heading: object = { color: "red", backgroundColor: "black" };

export default Header;
