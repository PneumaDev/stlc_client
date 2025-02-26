import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  LinearProgress,
} from "@mui/material";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import toast from "react-hot-toast";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoCard = ({ title, description, videoId }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const downloadMp3 = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${backendUrl}/api/yt/download?videoId=${encodeURIComponent(
          videoId
        )}&title=${encodeURIComponent(title)}`
      );

      if (!response.ok) {
        throw new Error("Error. Please check your network.");
      }

      const totalBytes = Number(response.headers.get("Content-Length")) || 0;
      const totalMB = totalBytes / (1024 * 1024);
      console.log("Total bytes:", totalBytes);
      console.log(`Total size: ${totalMB.toFixed(2)} MB`);

      let receivedBytes = 0;
      const reader = response.body.getReader();
      const chunks = [];
      let result;

      while (!(result = await reader.read()).done) {
        const chunk = result.value;
        chunks.push(chunk);
        receivedBytes += chunk.length;

        const downloadedMB = (receivedBytes / (1024 * 1024)).toFixed(2);
        console.log(
          `Downloaded: ${downloadedMB} MB of ${totalMB.toFixed(2)} MB`
        );
        setProgress((receivedBytes / totalBytes) * 100);
      }

      const blob = new Blob(chunks, { type: "audio/mpeg" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = title.endsWith(".mp3") ? title : `${title}.mp3`;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleDownloads = () => {
    // Start download process
    toast.promise(
      downloadMp3(),
      {
        loading: "Downloading track...",
        success: "Track downloaded!",
        error: (error) =>
          error.message || "Error. Please check your connection",
      },
      {
        id: "toast",
      }
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      <Card raised sx={{ height: "100%" }}>
        <CardMedia
          component="div"
          sx={{
            backgroundColor: "#f5f5f5",
          }}
        >
          <LiteYouTubeEmbed id={videoId} title={title} />
        </CardMedia>
        <CardContent sx={{ padding: "16px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "Yantamarav",
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title.replace(/&amp;/g, "and")}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontFamily: "Imprima",
              fontSize: "0.9rem",
              textAlign: "center",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              height: "60px",
            }}
          >
            {description}
          </Typography>

          {/* Show progress bar if loading */}
          {loading && (
            <Box
              sx={{
                marginTop: "8px",
              }}
            >
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}

          {/* Centered download button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 2,
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownloads} // Start download on click
              sx={{ fontFamily: "Yantramanav" }}
              disabled={loading}
            >
              Download (MP3)
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoCard;
