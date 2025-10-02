export class Searching {
    private cachedToken: string = "";
    /**
     * 
     * @param API_key Token used for authentication when searching using Spotify's API.
     */
    constructor(
        API_key: string = ""
    ) {
        this.cachedToken = API_key;
    }

    // Songs / Music

    private songURL: string = "";
    /**
     * 
     * Search for a song on Spotify, multiple search results can pop up for generic searches or popular songs.
     * 
     * @param name Song names are **not** case-sensitive.
     * @param artist Artist names are not required, but recommended to find what you're looking for.
     */
    findSong(
        name: string,
        artist?: string
    ): string[] {
        return [];
    }
}