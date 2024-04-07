import ContactPageIcon from "@mui/icons-material/ContactPage";
import SmsIcon from "@mui/icons-material/Sms";
import { Button, Link, Stack, useMediaQuery, useTheme } from "@mui/material";
import resume from "../../../cv-louis-de-gaudenzi-(en).pdf";

function ProfileActions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return (
    <Stack {...(!isMobile && { direction: "row" })} gap={2}>
      <Button size="large" startIcon={<SmsIcon />} onClick={scrollToBottom}>
        Contact me
      </Button>
      <Button
        component={Link}
        href={resume}
        size="large"
        startIcon={<ContactPageIcon />}
        target="_blank"
        rel="noopener"
      >
        See my resume
      </Button>
    </Stack>
  );
}

export default ProfileActions;
