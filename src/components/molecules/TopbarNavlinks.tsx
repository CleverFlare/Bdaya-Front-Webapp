import { Button } from "@mui/joy";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOnMount } from "../../hooks";
interface ITopbarNavlinksProps {
  links: { text: string; to: string }[];
}

export const TopbarNavlinks: FC<ITopbarNavlinksProps> = (props) => {
  const location = useLocation();
  return (
    <>
      {props.links.map((navLink) => {
        const isSelected = location.pathname === navLink.to;
        const variant = isSelected ? "soft" : "plain";
        return (
          <Button
            component={Link}
            to={navLink.to}
            variant={variant}
            color="neutral"
            size="sm"
            key={crypto.randomUUID()}
          >
            {navLink.text}
          </Button>
        );
      })}
    </>
  );
};
