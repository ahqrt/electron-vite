import { Box } from "@mui/material";
import MediaStreamPage from "../MediaStream/MediaStream";
const ipcRenderer = window.ipcRenderer || false;

const Example = () => {



  return (
    <Box>
      {/* <div className="text-3xl">Hello world</div> */}
      <MediaStreamPage />
    </Box>
  );
};

export default Example;
