import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true,
})

export const httpService = {
    get(endpoint, data, params) {
        return ajax(endpoint, 'GET', data, params)
    },
    post(endpoint, data, params) {
        return ajax(endpoint, 'POST', data, params)
    },
    put(endpoint, data, params) {
        return ajax(endpoint, 'PUT', data, params)
    },
    delete(endpoint, data, params) {
        return ajax(endpoint, 'DELETE', data, params)
    }
}

async function ajax(endpoint, method, data = null, params = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params
        })
        return res.data
    } catch (err) {
        if (err.response && err.response.status === 403) {
            window.location.assign('/sign')
            throw new Error(err.response.data)
        }
        if (err.response && err.response.status === 401)
            throw new Error(err.response.data)

    }
}