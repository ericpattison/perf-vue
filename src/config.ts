import axios from 'axios'
import { config } from 'vue/types/umd';

export interface APIConfig {
    url: string
}

export interface SiteConfig {
    apis: IDictionary<APIConfig>
}

let configPromise: Promise<SiteConfig>;

const get = () => {
    if(configPromise) return configPromise;
    configPromise = axios.get('/config.json').then(resp => resp.data);
    return configPromise;
}

export default {
    get,
}
