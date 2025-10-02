import { Searching } from "./API/Searching.js";
import { fetchSpotifyToken } from "./API/TokenManager.js";
import { Upload } from "./API/Upload.js";

export const SearchAPI = Searching; /* Classes */
export const UploadAPI = Upload;

export const fetchToken = fetchSpotifyToken; /* Functions */