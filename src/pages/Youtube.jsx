import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import {
  Container,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Youtube() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Side effects
  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(backendUrl + "/api/yt/videos");
        const videoData = await response.json();
        if (Array.isArray(videoData)) {
          setVideos(videoData);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        setError("Error fetching videos: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideosData();
  }, []);

  return (
    <>
      <Container>
        <Toaster toastOptions={{ className: "font-yantramanav" }} />
        {/* Header */}
        <Box className="flex justify-center text-center items-center flex-col my-5">
          <div
            variant="h5"
            component="h1"
            sx={{ fontWeight: "bold", color: "#FF0000" }}
          >
            <YouTubeIcon
              sx={{ fontSize: 40, verticalAlign: "middle", mr: 2 }}
            />
            YouTube Gallery
          </div>
          <Box sx={{ height: 80 }}>
            <TypeAnimation
              sequence={[
                `Watch and download the latest posts from our YouTube Channel AD FREE.`,
                2000,
              ]}
              speed={50}
              style={{
                fontSize: "1.5rem",
                color: "#333",
                fontFamily: "imprima",
                marginBottom: "12px",
              }}
              repeat={Infinity}
              cursor={false}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e0f7fa",
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{
                display: "flex",
                alignItems: "center", // Vertically aligns the icon with the text
                fontSize: "1em",
                color: "#0277bd",
                fontFamily: "Imprima",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center", // Ensures the icon itself is centered vertically
                  justifyContent: "center", // Centers horizontally within its container
                  marginRight: "8px",
                }}
              >
                <i
                  className="fa-solid fa-circle-info"
                  style={{
                    color: "#0288d1",
                    fontSize: "20px",
                  }}
                ></i>
              </Box>
              Download and playback speed is dependent on your network bandwith.
            </Typography>
          </Box>
        </Box>

        {/* Loading state */}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {/* Error state */}
        {error && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}

        {/* Display videos when loading is complete */}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 pt-5 font-muktaVaani justify-items-center px-5 lg:px-10">
            {videos.map((video, index) => (
              <VideoCard
                title={video.title}
                description={video.description}
                videoId={video.id}
                downloadLink={video.downloadLink}
                key={index}
              />
            ))}
          </div>
        )}

        {/* Fallback message if no videos are available */}
        {!isLoading && !error && videos.length === 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Typography>No videos available at the moment.</Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
