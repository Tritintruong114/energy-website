import React from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export function useWindScreenowSize() {
  const [size, setSize] = React.useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
