import { FC, ReactElement, useEffect } from "react";
import { Container, Sheet, useColorScheme } from "@mui/joy";
import { useScroll } from "../../hooks";

interface ITopbarProps {
  isSolid?: boolean;
  children?: ReactElement;
}

export const Topbar: FC<ITopbarProps> = (props) => {
  const { scrollY } = useScroll();

  const backgroundColor =
    scrollY > 0 || props.isSolid
      ? "var(--joy-palette-background-surface)"
      : "transparent";

  const borderBottom =
    scrollY > 0
      ? "1px solid var(--joy-palette-divider)"
      : "1px solid transparent";

  const style = {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor,
    borderBottom,
    transition: "300ms",
    boxSizing: "border-box",
    zIndex: 5,
  };

  return (
    <Sheet sx={style}>
      <Container>{props.children}</Container>
    </Sheet>
  );
};
