import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="464162798a3f2b9fff400252b7b3e5d5"
const movieByGenreBaseUrl="https://api.themoviedb.org/3/discover/movie?api_key=464162798a3f2b9fff400252b7b3e5d5"
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMoviewByGenreId=(id)=>axios.get(movieByGenreBaseUrl+"&with_genres="+id)



export default{
    getTrendingVideos,
    getMoviewByGenreId
}