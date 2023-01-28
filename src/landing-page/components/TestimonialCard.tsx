import { Avatar, Card, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import { FC } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
interface ITestimonialCardProps {
  children: string;
  author: string;
  track: string;
  src?: string;
}

export const TestimonialCard: FC<ITestimonialCardProps> = (props) => {
  const fixedHeight = "386px";
  return (
    <Card
      variant="soft"
      sx={{ height: fixedHeight, width: "100%", boxSizing: "border-box" }}
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ height: "100%" }}
      >
        <Avatar
          src={props.src}
          variant="solid"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="i" textAlign="center">
          "{props.children}"
        </Typography>
        <FormatQuoteIcon color="primary" sx={{ fontSize: 100, opacity: 0.5 }} />
        <Stack alignItems="center">
          <Typography level="h6" fontWeight="bold">
            {props.author}
          </Typography>
          <Typography level="body2" color="neutral" fontWeight="bold">
            {props.track} Member
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
