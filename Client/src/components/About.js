

import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          St. Louis Cardinals
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          345 Missouri Avenue
        </Typography>
      </Box>
    </div>
  );
};

export default About;