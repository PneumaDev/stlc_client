// api.js
export const downloadVideo = async (videoId, onProgress) => {
  const downloadUrl = `/api/yt/download?url=https://www.youtube.com/watch?v=${videoId}&type=video`;
  return await startDownload(videoId, downloadUrl, onProgress);
};

export const downloadAudio = async (videoId, onProgress) => {
  const downloadUrl = `/api/yt/download?url=https://www.youtube.com/watch?v=${videoId}&type=audio`;
  return await startDownload(videoId, downloadUrl, onProgress);
};

const startDownload = async (videoId, downloadUrl, onProgress) => {
  const downloadResponse = await fetch(downloadUrl);

  if (!downloadResponse.ok) {
    throw new Error("Failed to start download");
  }

  const pollProgress = async () => {
    try {
      const response = await fetch(`/api/yt/progress?videoId=${videoId}`);
      if (response.ok) {
        const { title, progress } = await response.json();
        onProgress(title, progress);

        if (progress < 100) {
          setTimeout(pollProgress, 1000); // Poll every second
        }
      }
    } catch (error) {
      console.error("Error polling progress:", error);
    }
  };

  pollProgress();
};
