import { Chip, Stack } from "@mui/joy";
import { FC } from "react";

export type TechDetails = {
  name: string;
  infoUrl?: string;
};

interface ITechListProps {
  list: TechDetails[];
}

export const TechList: FC<ITechListProps> = (props) => {
  function redirectToInfo(href: string) {
    window.open(href, "_blank");
  }
  return (
    <Stack direction="row" gap={0.5} flexWrap="wrap">
      {props.list.map(({ name, infoUrl }) => (
        <Chip
          key={crypto.randomUUID()}
          size="sm"
          variant="outlined"
          onClick={infoUrl ? () => redirectToInfo(infoUrl) : undefined}
        >
          {name}
        </Chip>
      ))}
    </Stack>
  );
};
