import {request} from "@/network/request";

export function getMovieList(start) {
    return request({
        url: '/api/v1/movies',
        params: {
            // api/v1/movies?start=0&limit=15
            start
        }
    })
}