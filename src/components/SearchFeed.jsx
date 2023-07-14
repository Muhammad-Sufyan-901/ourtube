import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((response) => setVideos(response.items));
  }, [searchTerm]);

  return (
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
        Search Results For : <span style={{ color: "#fc1503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
