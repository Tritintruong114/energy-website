import cx from "clsx";
type ContainerTypes = {
  children: React.ReactNode;
  className: string;
};

const Container = ({ children, className }: ContainerTypes) => {
  return <div className={cx("container", className)}>{children}</div>;
};
export { Container };
