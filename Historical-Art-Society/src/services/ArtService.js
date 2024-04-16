import axios from "axios"

import { baseURL } from "../env.js"

const ArtAPI = axios.create({
    baseURL

})

class ArtService {

    async getArt() {

    }
}

export const artService = new ArtService()