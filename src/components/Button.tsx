import { ReactNode } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
    type: 'button' | 'submit';
    title?: string;
    className?: string;
    icon?: string | Element | JSX.Element | IconType | ReactNode;

}
const Button = ({title, type, icon}: ButtonProps) => {
  return (
    <button type={type}>
        {title}
    </button>
  )
}

export default Button