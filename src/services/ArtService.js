import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { api } from "./AxiosService.js"

class ArtService {

    async getArt() {
        let response = await api.get('api/artworks')
        console.log('fetched, yo', response)
        const artworks = response.data.artworks.map(artData => new Art(artData))
        AppState.arts = artworks
    }
}

export const artService = new ArtService()