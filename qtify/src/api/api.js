import axios from "axios";
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

// export const BACKEND_ENDPOINT = "https://localhost:3000";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
}

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return response.data;
  } catch (error) {
    console.error("Error fetching filters:", error);
  }
};

