import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

function Videos({ videos, direction }) {
  if (!videos?.length) return "Sorry, We Hit Some Error! Please Try Again";

  return (
    <Stack
      gap={2}
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
    >
      {videos.map((items, index) => (
        <Box key={index}>
          {items.id.videoId && <VideoCard video={items} />}
          {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
