import { IButton } from "../models/props/IButton";

const Button = (props: IButton) => {
  const { text, onClick, showAdd } = props;
  return (
    <button
      className={showAdd ? "button is-danger" : "button is-primary"}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
