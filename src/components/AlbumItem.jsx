import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "swiper/css";
import "swiper/css/pagination";

// Component for individual music cards
const MusicCard = ({ image, name, description, id, type }) => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);

  // Function to handle play and album navigation with toast notifications
  const onClickFunctionality = () => {
    if (type === "album") {
      navigate(`./album/${id}`);
    } else {
      toast.promise(
        playWithId(id).catch((error) => {
          throw new Error(error.message);
        }),
        {
          loading: "Loading track...",
          success: "Track loaded!",
          error: (err) => {
            return err.message || "Failed to play track.";
          },
        },
        {
          id: "toast",
        }
      );
    }
  };

  return (
    <Card
      sx={{
        minWidth: 180,
        maxHeight: 380,
        cursor: "pointer",
        borderRadius: "12px",
      }}
      onClick={onClickFunctionality}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            height: 192,
            width: "100%",
            borderRadius: "12px 12px 0 0",
            objectFit: "cover",
          }}
        />

        {/* Conditionally render the play icon based on the type */}
        {type === "music" && (
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: 64,
            }}
            aria-label="play"
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 64 }} />
          </IconButton>
        )}
      </Box>

      <CardContent sx={{ backgroundColor: "#F7EFE5" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Mukta Vaani",
              color: "text.primary",
              lineClamp: 1,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineClamp: 2,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Main AlbumItem component to display the Swiper carousel
const AlbumItem = ({ title, items, delay = 3000, type }) => (
  <div className="mb-4">
    <h1 className="my-5 font-bold text-white text-2xl font-muktaVaani">
      {title}
    </h1>
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          <MusicCard
            name={item.name}
            image={item.image}
            description={item.description}
            id={item.id}
            type={type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default AlbumItem;
