import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.radar.io/v1',
    headers: {
        'Authorization': 'prj_live_sk_d288bc23636c7e80a0e573b50363ae310d4f89ad'
    }
})