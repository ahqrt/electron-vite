import { Box } from "@mui/material";
import { useEffect } from "react";

const volumeAPI = window.volumeAPI || false;

const Example = () => {

  useEffect(() => {
    volumeAPI.getVolume().then(r => {
      console.log('get volume number', r)
    })
  }, [])

  return (
    <Box>
      <div className="text-3xl">Hello world</div>
    </Box>
  );
};

export default Example;
