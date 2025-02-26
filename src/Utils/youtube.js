// AIzaSyBpDd7Dp4lnxTeEtk9801mPKCtg1y6JsMw;

// utils/youtube.js

import axios from "axios";

const API_KEY = "AIzaSyBpDd7Dp4lnxTeEtk9801mPKCtg1y6JsMw";
const CHANNEL_ID = "UCqYGnYVOfB9bd3CUirZPjEQ";

export const fetchVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
