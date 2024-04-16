import { api } from "./AxiosService.js"

class ArtService {

    async getArt() {
        let artworks = await api.get('api/artworks')
        console.log('fetched, yo', artworks)
    }
}

export const artService = new ArtService()