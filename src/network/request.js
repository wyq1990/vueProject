import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://192.168.2.135:3000',
        timeout: 5000
    })

    // 2.axios拦截器
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        console.log(error);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error);
    })

    // 发送真正网络请求
    return instance(config)
}


