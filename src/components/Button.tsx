import { IButton } from "../models/props/IButton";

const Button = (props: IButton) => {
  const { text, onClick } = props;
  return (
    <button className="button is-primary" onClick={() => onClick()}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
