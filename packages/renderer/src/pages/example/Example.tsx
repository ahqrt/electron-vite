import { Box } from "@mui/material";
import DesktopStreamPage from "../MediaStream/DesktopStream";
import MediaStreamPage from "../MediaStream/MediaStream";
const ipcRenderer = window.ipcRenderer || false;

const Example = () => {



  return (
    <Box>
      {/* <MediaStreamPage /> */}
      <DesktopStreamPage />
    </Box>
  );
};

export default Example;
