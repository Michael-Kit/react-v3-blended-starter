import axios from "axios";
import type { Photo } from "../types/photo";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

export const fetchPhotosByQuery = async (query: string): Promise<Photo[]> => {
  const response = await axios.get("search", {
    params: { query },
  });

  return response.data.photos.map((photo: Photo) => ({
    id: photo.id,
    avg_color: photo.avg_color,
    alt: photo.alt,
    src: {
      large: photo.src.large,
      original: photo.src.original,
    },
  }));
};
