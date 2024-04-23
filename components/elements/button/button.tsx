import cx from "clsx";
import { buttonStyles, ButtonStylesProps } from "./button-styles";

export interface ButtonProps extends ButtonStylesProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { className, children, variant, size } = props;
  return (
    <button
      className={cx(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
