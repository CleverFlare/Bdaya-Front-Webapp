import {
  Avatar,
  Box,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectPreviewSlider } from "../components/ProjectPreviewSlider";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export const ProjectDetails: FC = (props) => {
  const location = useLocation();

  return (
    <>
      <Container
        component={Stack}
        spacing={1}
        sx={{ paddingBlock: 2, paddingBottom: 10 }}
      >
        <Typography level="h3" fontWeight="bold">
          Landscape
        </Typography>
        <Typography level="body2" textTransform="uppercase" fontWeight="bold">
          By Marwan
        </Typography>
        <Box sx={{ position: "relative" }}>
          <ProjectPreviewSlider
            images={[
              "https://media.istockphoto.com/id/1270775179/photo/cairo-found-nile.jpg?b=1&s=612x612&w=0&k=20&c=yo4YxCngGOBbIikg6pGQhtLQl7OmzplVuJJXTBnNkKg=",
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
              "https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg",
            ]}
          />
          <Chip
            slotProps={{
              action: {
                component: "a",
                href: "https://www.google.com/?&bih=878&biw=1280&hl=en",
              },
            }}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              borderRadius: 5,
              zIndex: 1,
            }}
            startDecorator={<InsertLinkIcon />}
            variant="soft"
          >
            Link Attachment To The Project
          </Chip>
        </Box>
      </Container>
    </>
  );
};
