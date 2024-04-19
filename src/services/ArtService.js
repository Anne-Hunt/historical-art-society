import { AppState } from "../AppState.js"
import { Art } from "../models/Art.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtService {

    async getArt() {
        let response = await api.get('api/artworks')
        logger.log('fetched yo art', response)
        const artwork = response.data.artworks.map(artData => new Art(artData))
        AppState.artworks = artwork
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.pages
    }

    async getActiveArt(artId) {
        const response = await api.get(`api/art/${artId}`)
        logger.log('prepping the work for show', response.data)
        AppState.activeArt = new Art(response.data)
    }

    async changePage(pageNumber) {
        const response = await api.get(`api/artworks?page=${pageNumber}`)
        logger.log('finding the results and page', response.data)
        const artworks = response.data.results.map(artData => new Art(artData))
        AppState.artworks = artworks
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.total_pages
    }

}

export const artService = new ArtService()