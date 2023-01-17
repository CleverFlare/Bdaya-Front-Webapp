import { Avatar, Card, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import { FC } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
interface ITestimonialCardProps {
  children: string;
  author: string;
  src?: string;
}

export const TestimonialCard: FC<ITestimonialCardProps> = (props) => {
  return (
    <Card
      variant="soft"
      sx={{ height: "100%", width: "100%", boxSizing: "border-box" }}
    >
      <Stack alignItems="center">
        <Avatar
          src={props.src}
          variant="solid"
          sx={{ width: 100, height: 100 }}
        />
        <FormatQuoteIcon color="primary" sx={{ opacity: 0.5, fontSize: 70 }} />
        <Typography component="i" textAlign="center">
          "{props.children}"
        </Typography>
        <Typography sx={{ marginTop: 2 }}>{props.author}</Typography>
      </Stack>
    </Card>
  );
};
