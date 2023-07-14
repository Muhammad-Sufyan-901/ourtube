import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((response) => setVideos(response.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          sx={{ mt: 1.5, color: "#fff" }}
          variant="body2"
          className="copyright"
        >
          Copyright 2022 OurTube
        </Typography>
      </Box>

      <Box
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
        p={2}
      >
        <Typography
          sx={{ color: "white" }}
          mb={2}
          variant="h4"
          fontWeight="bold"
        >
          {selectedCategory} <span style={{ color: "#fc1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
