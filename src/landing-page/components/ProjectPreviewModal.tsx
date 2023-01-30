import {
  Box,
  Chip,
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { FC, ReactNode } from "react";
import { ProjectPreviewSlider } from "./ProjectPreviewSlider";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

interface IProjectPreviewModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  author?: string;
  images?: string[];
  link?: string;
  [key: string]: any;
}

export const ProjectPreviewModal: FC<IProjectPreviewModalProps> = (props) => {
  return (
    <Modal
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...(props.sx || {}),
      }}
    >
      <Sheet
        sx={{
          width: "clamp(50%, 700px, 70%)",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          outline: "none",
        }}
      >
        <ModalClose sx={{ top: 5, right: 5, width: "min-content" }} />
        <Stack direction="column" spacing={1}>
          <Typography level="h3" fontWeight="bold">
            {props.title}
          </Typography>
          <Typography level="body2" textTransform="uppercase" fontWeight="bold">
            By {props.author}
          </Typography>
          <Box sx={{ position: "relative" }}>
            <ProjectPreviewSlider images={props.images || []} />
            {props.link && (
              <Chip
                slotProps={{
                  action: {
                    component: "a",
                    href: props.link,
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
            )}
          </Box>
        </Stack>
      </Sheet>
    </Modal>
  );
};
