import { Chip, Stack } from "@mui/joy";
import { FC } from "react";

export type TechDetails = {
  name: string;
  src?: string;
};

interface ITechListProps {
  list: TechDetails[];
}

export const TechList: FC<ITechListProps> = (props) => {
  function redirectToInfo(href: string) {
    window.open(href, "_blank");
  }
  return (
    <Stack direction="row" gap={1}>
      {props.list.map(({ name, src }) => (
        <Chip
          key={crypto.randomUUID()}
          size="sm"
          variant="outlined"
          onClick={src ? () => redirectToInfo(src) : undefined}
        >
          {name}
        </Chip>
      ))}
    </Stack>
  );
};
