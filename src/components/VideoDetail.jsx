import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then((response) => setVideoDetail(response.items[0]));
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((response) => setRelatedVideos(response.items));
  }, [id]);

  if (!videoDetail?.snippet) return "Sorry, We Hit Some Error! Please Try Again";

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
            />
            <Typography
              p={2}
              color="#fff"
              variant="h5"
              fontWeight="bold"
            >
              {videoDetail.snippet.title}
            </Typography>
            <Stack
              sx={{ color: "#fff" }}
              py={1}
              px={2}
              direction="row"
              justifyContent="space-between"
            >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                >
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
              >
                <Typography
                  sx={{ opacity: 0.7 }}
                  variant="body1"
                >
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  sx={{ opacity: 0.7 }}
                  variant="body1"
                >
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos
            videos={relatedVideos}
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
