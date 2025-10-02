import { stringify } from "querystring";
import axios from "axios";

/**
 * 
 * Return your Spotify authentication token based off your App's
 *  Client ID and Client Secret.
 */
export async function fetchSpotifyToken(
    clientID: string,
    clientSecret: string
): Promise<string> {
    const data = stringify({
        grant_type: "client_credentials"
    });

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${Buffer.from(`${clientID}:${clientSecret}`).toString("base64")}`
    };

    try {
        const response = await axios.post("https://accounts.spotify.com/api/token", data, { headers });
        return response.data.access_token;
    } catch (err) {
        console.error(`Request failed: ${err}`);
        return "";
    }
}