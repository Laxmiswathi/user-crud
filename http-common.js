import axios from 'axios'

export default axios.create({

    baseURL : 'http://localhost:8088/User',
    headers: {
        'Content-type' : 'application/json'
    }
})