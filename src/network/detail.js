import {request} from "@/network/request";

// export function getMovieList(start) {
//     return request({
//         url: '/api/v1/movies',
//         params: {
//             // api/v1/movies?start=0&limit=15
//             start
//         }
//     })
// }

export function getMovieDetail(id) {
    return request({
        url: '/api/v1/movie/'+id
    })
}