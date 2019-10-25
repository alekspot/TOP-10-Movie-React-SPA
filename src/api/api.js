import * as axios from "axios";
const apiKey = '4a1a49b2bd67384870a57039fbe6ff33';

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`
});

export const API = {
    async getContent(year, type) {
        
        let request;
        if(type==='movie'){
            request = await instance.get(`/discover/movie?api_key=${apiKey}&language=ru&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=0&primary_release_year=${year}`);
        } else if (type==='tv') {
            request = await instance.get(`/discover/tv?api_key=${apiKey}&language=ru&sort_by=vote_average.asc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&first_air_date_year=${year}`);
        }   
        const content = request.data.results.filter((item, index) => index < 10);
        content.forEach(element => {
            element['type'] = type
        });
        return content
    },
    async getImages (id, type) {
        const images = await instance.get(`${type}/${id}/images?api_key=4a1a49b2bd67384870a57039fbe6ff33`);
        
        return images.data.posters.map(item => (`https://image.tmdb.org/t/p/original${item.file_path}`)); 
    }
}


